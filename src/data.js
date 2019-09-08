import {getRandomElementArray, createUniqueList, getRandomFromRange, getRandomBoolean} from './components/utils.js';

const mockData = {
  titles: [
    `Gladiator`,
    `Cast Away`,
    `The Dark Knight`,
    `The Pianist`,
    `Titanic`,
    `Iron`,
    `Braveheart`,
    `It's a Wonderful Life`
  ],
  posters: [
    `made-for-each-other.png`,
    `popeye-meets-sinbad.png`,
    `sagebrush-trail.jpg`,
    `santa-claus-conquers-the-martians.jpg`,
    `the-dance-of-life.jpg`,
    `the-great-flamarion.jpg`,
    `the-man-with-the-golden-arm.jpg`
  ],
  genres: [
    `Action`,
    `Fantasy`,
    `Detective`,
    `Drama`,
    `Historical`,
    `Comedy`
  ],
  description: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    `Cras aliquet varius magna, non porta ligula feugiat eget.`,
    `Fusce tristique felis at fermentum pharetra.`,
    `Aliquam id orci ut lectus varius viverra.`,
    `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
    `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
    `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
    `Sed sed nisi sed augue convallis suscipit in sed felis.`,
    `Aliquam erat volutpat.`,
    `Nunc fermentum tortor ac porta dapibus.`,
    `In rutrum ac purus sit amet tempus.`
  ],
  actors: [
    `Jack Nicholson`,
    `Marlon Brando`,
    `Robert De Niro`,
    `Al Pacino`,
    `Daniel Day-Lewis`,
    `Dustin Hoffman`,
    `Tom Hanks`,
    `Anthony Hopkins`
  ],
  writers: [
    `Quentin Tarantino`,
    `James Cameron`,
    `John Hughes`,
    `Alfonso Cuarón`
  ],
  directors: [
    `David Fincher`,
    `James Cameron.`,
    `Quentin Tarantino`,
    `Christopher Nolan`,
    `Peter Jackson`
  ],
  countries: [
    `USA`,
    `Great Britain`,
    `Canada`,
    `Australia`
  ],
  age: [
    `+12`,
    `+14`,
    `+16`,
    `+18`
  ]
};

const commentData = {
  names: [
    `John Smith`,
    `John Doe`,
    `Tim Macoveev`
  ],
  texts: [
    `Interesting setting and a good cast`,
    `Booooooooooring`,
    `Very very old. Meh`,
    `Almost two hours? Seriously?`
  ],
  emojis: [
    `angry`,
    `puke`,
    `sleeping`,
    `trophy`,
    `smile`
  ],
  dates: [
    `3 days ago`,
    `2 days ago`,
    `yesterday`,
    `today`
  ]
};

const getComment = () => ({
  author: getRandomElementArray(commentData.names),
  date: getRandomElementArray(commentData.dates),
  emoji: getRandomElementArray(commentData.emojis),
  text: getRandomElementArray(commentData.texts)
});

const getComments = () => new Array(Math.round(Math.random() * 5)).fill(``).map(getComment);

export const filmData = () => ({
  title: getRandomElementArray(mockData.titles),
  rating: Math.round((Math.random() * 100)) / 10,
  poster: `./images/posters/${getRandomElementArray(mockData.posters)}`,
  description: createUniqueList(mockData.description, 3),
  releaseDate: new Date(getRandomFromRange(0, Date.now())),
  genres: createUniqueList(mockData.genres, 3),
  actors: createUniqueList(mockData.actors, 2),
  writers: createUniqueList(mockData.writers, 2),
  director: getRandomElementArray(mockData.directors),
  duration: `${getRandomFromRange(1, 2)}h ${getRandomFromRange(0, 59)}m`,
  country: getRandomElementArray(mockData.countries),
  age: getRandomElementArray(mockData.age),
  isToWatchlist: getRandomBoolean(),
  isArchive: getRandomBoolean(),
  isFavorite: getRandomBoolean(),
  comments: getComments()
});

export const filterData = (films) => ([
  {
    title: `Watchlist`,
    count: films.reduce((count, filter) => (filter.isToWatchlist) ? count + 1 : count, 0)
  },
  {
    title: `History`,
    count: films.reduce((count, filter) => (filter.isArchive) ? count + 1 : count, 0)
  },
  {
    title: `Favorites`,
    count: films.reduce((count, filter) => (filter.isFavorite) ? count + 1 : count, 0)
  },
]);
