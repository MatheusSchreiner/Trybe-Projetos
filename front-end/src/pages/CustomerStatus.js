import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getOrders } from '../services/api';
import { getStorage } from '../utils/localStorage';

export default function OrderStatus() {
  const [orders, setOrders] = useState([]);

  const date = (data) => {
    const newDate = new Date(data);
    const dia = newDate.getDate();
    const mes = (newDate.getMonth() + 1).toString();
    const ano = newDate.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };
  let statusClass = '';

  useEffect(() => {
    const takeOrders = async () => {
      const { data } = await getOrders();
      setOrders(data);
    };
    takeOrders();
  }, []);

  return (

    <div className="bgrImgProd">
      <Header
        pageName="LISTA DE PEDIDOS"
        userName={ getStorage('user') && getStorage('user').name }
      />

      {orders.length && orders.map(({ id, status, saleDate, totalPrice }) => {
        if (status === 'Preparando') {
          statusClass = 'btn-warning';
        }
        if (status === 'Em Trânsito') {
          statusClass = 'btn-info';
        }
        if (status === 'Pendente') {
          statusClass = 'btn-danger';
        }
        if (status === 'Entregue') {
          statusClass = 'btn-success';
        }
        return (
          <Link to={ `/customer/orders/${id}` } key={ id }>
            <div className="card-group container">
              <div className="row">
                <div className="card col status align-middle">
                  <div className="card-body align-middle">
                    <p className="card-title align-middle">
                      Pedido
                      {' '}
                      {id}
                    </p>
                  </div>
                </div>
                <div className="card col status">
                  <div className="card-body">
                    <button
                      className={ `card-title btn btn-sm ${statusClass} statusBtn` }
                      type="button"
                    >
                      {status}

                    </button>
                  </div>
                </div>
                <div className="card col status ">
                  <div className="card-body dateCard">
                    <p className="card-title ">
                      Total:
                      {' '}
                      <br />
                      {totalPrice.replace(/\./, ',')}
                      {' '}
                      <br />
                      Data:
                      {' '}
                      {date(saleDate)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
