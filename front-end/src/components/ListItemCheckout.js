import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../contexts/createContext';
import { checkoutProducts, getSellers } from '../services/api';

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
    getSellers()
      .then(({ data }) => {
        data.forEach((seller) => {
          setSellers([...sellers, seller]);
        });
      });
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
    const { data } = await checkoutProducts(objectOrder);
    return history.push(`/customer/orders/${data[0].saleId}`);
  }

  return (
    <>
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
                    className="removeItem"
                    type="submit"
                    onClick={ () => {
                      const valorFinal = itemTotal(product.price, product.quant);
                      setTotal(total - valorFinal);
                      const newProduct = products.map((element) => (
                        element === product ? { ...element, quant: 0 } : element));
                      setProducts(newProduct);
                    } }
                  >
                    Remover
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className="orderTotal"
        data-testid="customer_checkout__element-order-total-price"
      >
        Total:
        {total.toFixed(2).replace(/\./g, ',')}
      </div>
      <form
        onSubmit={ (event) => event.preventDefault() }
      >
        <p>Detalhes e Endereço para Entrega</p>
        <label htmlFor="responsableSeller">
          <p>P. Vendedora Responsável:</p>
          <select
            name="sellers"
            data-testid="customer_checkout__select-seller"
            onChange={ getinfo }
          >
            <option selected> - </option>
            { sellers.length > 0 && sellers.map(({ id, name, email }) => (
              <option
                key={ email }
                id={ id }
                value={ id }

              >
                {' '}
                {name}
                {' '}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="address">
          <p>Endereço</p>
          <input
            id="address"
            name="address"
            type="text"
            data-testid="customer_checkout__input-address"
            onChange={ getinfo }
          />
        </label>
        <label htmlFor="addressNumber">
          <p>Número</p>
          <input
            id="addressNumber"
            name="addressNumber"
            type="text"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ getinfo }
          />
        </label>
        <button
          className="submit-order"
          data-testid="customer_checkout__button-submit-order"
          type="submit"
          onClick={ () => getorder(productsList, total, address, sellersId) }
        >
          FINALIZAR PEDIDO
        </button>
      </form>
    </>
  );
}
