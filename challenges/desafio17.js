db.produtos.createIndex({ descricao: "text" });

db.produtos.countDocuments(
  { $text: { $search: "frango hamburguer" } },
);

/*
db.produtos.createIndex(
  { descricao: "text" },
  { default_language: "portuguese" },
);
db.produtos.countDocuments({ $text: { $search: "frango hamburguer" } });
*/
