import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../contexts/createContext';
import { checkoutProducts, getSellers } from '../services/api';
import { createStorage } from '../utils/localStorage';

export default function ListItemCheckout() {
  const { products, setProducts, total, setTotal } = useContext(Context);
  const [productsList, setProductsList] = useState([]);

  const [sellers, setSellers] = useState([]);
  const [address, setAddress] = useState({ address: '', number: 0 });
  const [sellersId, setSellersId] = useState(0);
  const history = useHistory();

  function itemTotal(Valor, Quantity) {
    const result = Valor * Quantity;
    return result;
  }

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getSellers();
      data.forEach((seller) => {
        setSellers([...sellers, seller]);
      });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Este sellers renderiza em loop os vendedores no campo input do select

  useEffect(() => {
    setProductsList(products.filter(({ quant }) => quant > 0));
  }, [products]);

  function getinfo({ target: { name, value } }) {
    if (name === 'address') {
      return setAddress({ ...address, address: value });
    }
    if (name === 'sellers') {
      return setSellersId(value);
    }
    return setAddress({ ...address, number: value });
  }

  async function getorder(
    productsOrder,
    totalPrice,
    deliveryAddress,
    sellerId,
  ) {
    const cart = productsOrder.map(
      ({ id, quant }) => ({ productId: id, quantity: quant }),
    );

    const objectOrder = {
      sale: {
        sellerId,
        totalPrice,
        deliveryAddress: deliveryAddress.address,
        deliveryNumber: deliveryAddress.number,
      },
      cart,

    };
    createStorage('order', objectOrder);
    console.log(objectOrder);
    const { data } = await checkoutProducts(objectOrder);
    console.log(data);
    return history.push(`/customer/orders/${data[0].saleId}`);
  }

  return (
    <div className="bgrImg">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Qtd</th>
            <th scope="col">Total</th>
            <th scope="col">Remover</th>
          </tr>
        </thead>
        <tbody>

          {productsList.map((product, i) => {
            const { id, name, price, quant } = product;
            return (
              <tr key={ id }>
                <td className="itemName">{name}</td>
                <td className="itemQuantity">{quant}</td>
                <td className="subtotalPrice">{itemTotal(price, quant).toFixed(2).replace(/\./g, ',')}</td>
                <td>
                  {' '}
                  <button
                    className="removeItem btn btn-sm btn-danger"
                    type="submit"
                    onClick={ () => {
                      const valorFinal = itemTotal(product.price, product.quant);
                      setTotal(total - valorFinal);
                      const newProduct = products.map((element) => (
                        element === product ? { ...element, quant: 0 } : element));
                      setProducts(newProduct);
                    } }
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        type="button"
        disabled
        className="orderTotal btn btn-lg btn-dark"
        data-testid="customer_checkout__element-order-total-price"
      >
        Total:
        {total.toFixed(2).replace(/\./g, ',')}
      </button>
      <div style={ { marginLeft: '10px' } }>
        <label className="select" htmlFor="responsableSeller">
          <p>Informações da venda:</p>
          <select
            className="form-select"
            name="sellers"
            data-testid="customer_checkout__select-seller"
            onChange={ getinfo }
          >
            <option selected> Escolha o Vendedor(a) </option>
            { sellers.length > 0 && sellers.map(({ id, name, email }) => (
              <option
                key={ email }
                id={ id }
                value={ id }
              >
                {name}
              </option>
            ))}
          </select>
        </label>
        <p>Detalhes e Endereço para Entrega</p>
      </div>
      <form
        className="form-inline"
        onSubmit={ (event) => event.preventDefault() }
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-4" style={ { marginLeft: '-10px' } }>
              <label htmlFor="address" className="sr-only">
                <p>Endereço</p>
                <input
                  id="address"
                  name="addressNumber"
                  className="form-control-sm"
                  style={ { width: '250px', marginTop: '-10px' } }
                  name="address"
                  type="text"
                  data-testid="customer_checkout__input-address"
                  onChange={ getinfo }
                  className="form-control mb-2 mr-sm-2"
                />
              </label>
            </div>
            <div className="col-4" style={ { margin: '0 0 0 110px' } }>
              <label htmlFor="addressNumber" className="sr-only container">
                <p>Nº</p>
                <input
                  id="addressNumber"
                  name="addressNumber"
                  className="form-control-sm"
                  style={ { width: '50px', marginTop: '-10px' } }
                  type="text"
                  data-testid="customer_checkout__input-addressNumber"
                  onChange={ getinfo }
                  className="form-control mb-2 mr-sm-2"
                />
              </label>
            </div>
          </div>
        </div>
        <div className="card text-center fixed-bottom">

          <button
            className="submit-order btn btn-dark"
            data-testid="customer_checkout__button-submit-order"
            type="submit"
            onClick={ () => getorder(productsList, total, address, sellersId) }
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </form>

    </div>
  );
}
