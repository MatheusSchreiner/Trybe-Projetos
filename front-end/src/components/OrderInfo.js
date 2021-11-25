import React, { useContext, useState } from 'react';
import { SocketContext } from '../utils/socketContext';

// https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65

export default function OrderInfo({ sale }) {
  const socket = useContext(SocketContext);
  const [statusOrder, setstatusOrder] = useState('');

  if (sale.length === 0) return null;

  const deliveryOrder = (id, status) => {
    socket.emit('status', ({ id, status }));
    setstatusOrder('Entregue');
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
        {(sale[0].saleDate.split('T')[0].split('-')[2])}
        /
        {(sale[0].saleDate.split('-')[1])}
        /
        {(sale[0].saleDate.split('-')[0])}
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
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}
