const { salesService } = require('../services');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('status', async ({ id, status }) => {
    // requisição para atualizar o status do pedido
    await salesService.updateStatus({ id }, { status });
    socket.emit('status', { id, status });
  });
});