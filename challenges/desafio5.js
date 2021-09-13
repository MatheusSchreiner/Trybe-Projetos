const favs = ["Sandra Bullock", "Tom Hanks", "Julia Roberts", "Kevin Spacey", "George Clooney"];

db.movies.aggregate([
  { $match: { countries: "USA", "tomatoes.viewer.rating": { $gte: 3 }, cast: { $in: favs } } },
  { $addFields: { num_favs: { $setIntersection: ["$cast", favs] } } },
  { $sort: { num_favs: -1, "tomatoes.viewer.rating": -1, title: -1 } },
  { $project: { title: 1, _id: 0, num_favs: 1 } },
  { $skip: 24 },
  { $limit: 1 },
]);
