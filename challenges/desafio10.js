db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
db.produtos.updateOne({ nome: "Big Mac" }, { $inc: { "vendasPorDia.3": 60 } });
db.produtos.updateMany({ tags: { $in: ["bovino", "pão"] } }, { $inc: { "vendasPorDia.6": 120 } });
db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });

/*
db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } },
);
db.produtos.updateOne(
  { nome: "Big Mac" },
  { $inc: { "vendasPorDia.3": 60 } },
);
db.produtos.updateOne(
  { tags: { $all: ["bovino", "pão"] } },
  { $inc: { "vendasPorDia.6": 120 } },
);
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });

OU

db.produtos.updateMany(
  {},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0,] } }
);

db.produtos.updateMany(
  { nome: "Big Mac" },
  { $set: { "vendasPorDia.3": 60 } }
);

db.produtos.updateMany(
  { tags: { $all: ["bovino", "pão"] } },
  { $set: { "vendasPorDia.6": 120 } }
);

db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });
*/
