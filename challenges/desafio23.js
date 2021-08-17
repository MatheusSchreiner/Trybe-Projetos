db.voos.findOne({
  litrosCombustivel: { $exists: 1, $lt: 1000 } },
  { _id: 0, vooId: 1, litrosCombustivel: 1 },
);