import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getProducts } from '../services/api';
import { getStorage } from '../utils/localStorage';

export default function ListProducts() {
  const [products, setProducts] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (!getStorage('user')) { history.push('/login'); }
    getProducts().then(({ data }) => setProducts(data))
      .catch((err) => { console.log(err); });
  }, [history]);

  return (
    <>
      <h3>Products</h3>

      {products && products.map(({ id, name, price, urlImage }, index) => (
        <section key={id} data-testid={`customer_products__element-card-price-${id}`}>

          <img src={urlImage} alt={name} data-testid={`customer_products__img-card-bg-image-${id}`} />
          <span data-testid={`customer_products__element-card-title-${id}`}>
            {name}
          </span>
          <button
            type="button"
            data-testid={`customer_products__button-card-rm-item-${id}`}
          >
            -
          </button>
          <input
            type="number"
            min="0"
            data-testid={`customer_products__input-card-quantity-${id}`}
          />

          <button
            type="button"
            data-testid={`customer_products__button-card-add-item-${id}`}
          >
            +
          </button>

          <li>{price}</li>
        </section>

      ))
      }
    </>


  );
}
