use('aggregations');

db.movies.aggregate([
  { $match: { awards: /won.*oscar/i } },
  { $group: {
    _id: null,
    maior: { $max: "$imdb.rating" },
    menor: { $min: "$imdb.rating" },
    media: { $avg: "$imdb.rating" },
    desvio: { $stdDevSamp: "$imdb.rating" },
  } },
]);

// db.movies.aggregate([
//   { $match:  }
//   { $group: {
//     _id: null,
//     cast: 
//   } }
// ]);
