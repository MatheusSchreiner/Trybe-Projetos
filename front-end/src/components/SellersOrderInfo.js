import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { SocketContext } from '../utils/socketContext';

// https://dev.to/bravemaster619/how-to-use-socket-io-client-correctly-in-react-app-o65
const EM_TRANSITO = 'Em Trânsito';
const PREPARANDO = 'Preparando';

export default function SellersOrderInfo({ sale }) {
  // Importa o hook de contexto do socket
  const socket = useContext(SocketContext);
  // Cria o estado para o status da venda
  const [statusOrder, setstatusOrder] = useState('');

  // emite um socket para atualizar o status da venda e atualiza o estado
  const handleStatus = (id, status) => {
    socket.emit('status', ({ id, status }));
    setstatusOrder(status);
  };
  // formata a data - Roger Franco.
  const date = (data) => {
    const newDate = new Date(data);
    const dia = newDate.getDate();
    const mes = (newDate.getMonth() + 1).toString();
    const ano = newDate.getFullYear();
    return `${dia}/${mes}/${ano}`;
  };

  function disablePrepare(statusState, statusSales) {
    if (statusState === PREPARANDO || statusState === EM_TRANSITO) {
      return true;
    }
    if (statusSales === PREPARANDO || statusSales === EM_TRANSITO) {
      return true;
    }
  }

  function disableShipping(statusState, statusSales) {
    if (statusState === EM_TRANSITO) {
      return true;
    }
    if (statusSales === EM_TRANSITO) {
      return true;
    }
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
        {/* Se o botão não for clicado(statusOrder === ''),
         então o status vem da requisição
         caso seja, o status exibido é o estado statusOrder */}
        { statusOrder === '' ? sale[0].status : statusOrder }

      </span>
      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ () => { handleStatus(sale[0].id, PREPARANDO); } }
        disabled={ disablePrepare(statusOrder, sale[0].status) }
      >
        PREPARAR PEDIDO
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ () => { handleStatus(sale[0].id, EM_TRANSITO); } }
        disabled={ disableShipping(statusOrder, sale[0].status) }
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
