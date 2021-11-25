import React, { useEffect } from 'react';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3002/');// server-side
// https://www.fullstacklabs.co/blog/chat-application-react-express-socket-io
const deliveryOrder = (id, status) => {
  socket.on('connection', () => {
    console.log('I\'m connected with the back-end');
  });
  socket.emit('status', ({ id, status }));
};

// useEffect(() => () => {
//   socket.on('connection', () => {
//     console.log('I\'m connected with the back-end');
//   });
// }, []);

export default function OrderInfo({ sale }) {
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
        { sale[0].status }
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
