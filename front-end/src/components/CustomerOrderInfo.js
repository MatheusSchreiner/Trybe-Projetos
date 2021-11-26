import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { SocketContext } from '../utils/socketContext';

// https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65

export default function CustomerOrderInfo({ sale }) {
  const socket = useContext(SocketContext);
  const [statusOrder, setstatusOrder] = useState('');

  if (sale.length === 0) return null;

  const deliveryOrder = (id, status) => {
    socket.emit('status', ({ id, status }));
    setstatusOrder('Entregue');
  };

  const date = (data) => {
    const newDate = new Date(data);
    const dia = newDate.getDate();
    const mes = (newDate.getMonth() + 1).toString();
    const ano = newDate.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  if (sale.length === 0) return null;
  return (
    <div>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { sale[0].id }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        { sale[0].seller.name }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { date(sale[0].saleDate) }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { statusOrder !== 'Entregue' ? sale[0].status : statusOrder }
      </span>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        onClick={ () => { deliveryOrder(sale[0].id, 'Entregue'); } }
        disabled
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

CustomerOrderInfo.propTypes = {
  sale: PropTypes.arrayOf(PropTypes.shape({
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    id: PropTypes.number,
    products: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      price: PropTypes.string,
      urlImage: PropTypes.string,
    })),
    saleDate: PropTypes.string,
    seller: PropTypes.shape({ name: PropTypes.string }),
    sellerId: PropTypes.number,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
    userId: PropTypes.number,
  })).isRequired,
};
