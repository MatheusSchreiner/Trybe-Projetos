import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { SocketContext } from '../utils/socketContext';

// https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65
const EM_TRANSITO = 'Em Trânsito';
const PREPARANDO = 'Preparando';

export default function SellersOrderInfo({ sale, setStatus }) {
  // Importa o hook de contexto do socket
  const socket = useContext(SocketContext);
  // emite um socket para atualizar o status da venda e atualiza o estado
  const handleStatus = (id, status) => {
    socket.emit('status', ({ id, status }));
    setStatus(status);
  };
  // formata a data - Roger Franco.
  const date = (data) => {
    const newDate = new Date(data);
    const dia = newDate.getDate();
    const mes = (newDate.getMonth() + 1).toString();
    const ano = newDate.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  function disablePrepare(status) {
    if(status !== "Pendente") return true
  }
  
  function disableShipping(status) {
    if(status !== "Preparando") return true
  }

  // Para não quebrar a aplicaçao ao renderizar a pagina antes da requisição ser realizada
  if (sale.length === 0) return null;
  return (
    <div>
      <span
        data-testid="seller_order_details__element-order-details-label-order-id"
      >
        { sale[0].id }
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-order-date"
      >
        { date(sale[0].saleDate) }
      </span>
      <span
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { sale[0].status }
      </span>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ () => { handleStatus(sale[0].id, PREPARANDO); } }
        disabled={ disablePrepare(sale[0].status) }
      >
        PREPARAR PEDIDO
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ () => { handleStatus(sale[0].id, EM_TRANSITO); } }
        disabled={ disableShipping(sale[0].status) }
      >
        SAIU PARA ENTREGA
      </button>
    </div>
  );
}
SellersOrderInfo.propTypes = {
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
  }, { length: PropTypes.number })).isRequired,
};
