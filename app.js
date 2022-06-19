const restaurants = [
  {
    name: "rest1",
    address: [
      {
        city: "San Francisco",
        street: "street 1",
        coordinates: [-77, 564, 40.677],
      },
    ],
    type: "french",
    kosher: "false",
    reviews: [
      { date: "2015-10-1", score: 8 },
      { date: "2017-10-1", score: 5 },
      { date: "2016-10-1", score: 9 },
    ],
  },
  {
    name: "rest2",
    address: [
      {
        city: "california",
        street: "street 2",
        coordinates: [-7, 54, 30.677],
      },
    ],
    type: "mexican",
    kosher: "false",
    reviews: [
      { date: "2021-10-1", score: 7 },
      { date: "2020-10-1", score: 4 },
      { date: "2017-10-1", score: 8 },
    ],
  },
  {
    name: "rest6",
    address: [
      {
        city: "Tel aviv",
        street: "street 6",
        coordinates: [-77, 564, 40.677],
      },
    ],
    type: "israeli",
    kosher: "true",
    reviews: [
      { date: "2015-10-1", score: 4 },
      { date: "2019-10-1", score: 9 },
      { date: "2020-10-1", score: 8 },
    ],
  },
  {
    name: "rest4",
    address: [
      {
        city: "London",
        street: "street 4",
        coordinates: [-77, 564, 40.677],
      },
    ],
    type: "Thai",
    kosher: "false",
    reviews: [
      { date: "2015-10-1", score: 4 },
      { date: "2014-10-1", score: 5 },
      { date: "2019-10-1", score: 7 },
    ],
  },
  {
    name: "rest5",
    address: [
      {
        city: "Nazareth",
        street: "street 4",
        coordinates: [-77, 564, 40.677],
      },
    ],
    type: "Arabic",
    kosher: "false",
    reviews: [
      { date: "2015-10-1", score: 9 },
      { date: "2019-10-1", score: 8 },
      { date: "2013-10-1", score: 7 },
    ],
  },
];

// > db.restaurants.find().pretty()
// > db.restaurants.find({type:"french"})
// > db.restaurants.find({kosher:"true"})
// > db.restaurants.find({"address.city":"Tel aviv"})
// > db.restaurants.find({"address.city":"London"})
// >  db.restaurants.find({"address.coordinates":[-7, 54, 30.677]})
// > db.restaurants.find().sort({name:1})
// > db.restaurants.find().sort({name:-1})
// >db.restaurants.update({"_id" : ObjectId("62af48982c33e9bc86a022e7")},{$set:{"name":"VETRINA"}})
// >db.restaurants.update({"_id" : ObjectId("62af48982c33e9bc86a022e7")}, {$push:{reviews:{"date":"2-3-2022","score":"9"}}}
// --> convert all res. to kosher

// > db.restaurants.remove({ "_id" : ObjectId("62af4d9a79059405a47ed24a")})
// -->delete all restaurants

// > db.restaurants.find().forEach(res=>print(res.name))
// >> db.restaurants.find().forEach(rest=>print(rest.address[0].city))
// >  db.restaurants.find().forEach(rest=>print(rest.address[0].coordinates))

// > db.restaurants.find({name:/^r/})
// > db.restaurants.count()
// > db.restaurants.find({"reviews.date":"2015-10-1"})
