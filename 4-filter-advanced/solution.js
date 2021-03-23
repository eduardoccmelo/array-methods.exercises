const tvShows = [
  {
    title: "True Detective",
    publishingYear: 2014,
    rating: 9,
    watched: false,
  },
  {
    title: "The Boys",
    publishingYear: 2019,
    rating: 8.7,
    watched: true,
  },
  {
    title: "Game of Thrones",
    publishingYear: 2011,
    rating: 9.3,
    watched: true,
  },
  {
    title: "Mr. Robot",
    publishingYear: 2015,
    rating: 8.5,
    watched: false,
  },
  {
    title: "Chernobyl",
    publishingYear: 2019,
    rating: 9.4,
    watched: true,
  },
  {
    title: "Money Heist",
    publishingYear: 2017,
    rating: 8.3,
    watched: true,
  },
  {
    title: "Dark",
    publishingYear: 2017,
    rating: 8.8,
    watched: false,
  },
];

// Your code below
console.log("xxxxxxxxxx Whatched");
const watched = tvShows.filter((show) => {
  if (show.watched === true) {
    return show;
  }
});
console.log(watched);

console.log("xxxxxxxxxx Rating >= 9");
const goodRating = tvShows.filter((show) => {
  if (show.rating >= 9) {
    return show;
  }
});
console.log(goodRating);

console.log("xxxxxxxxxx Published before 2015");
const publishing = tvShows.filter((show) => {
  if (show.publishingYear < 2015) {
    return show;
  }
});
console.log(publishing);
