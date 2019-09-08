import {filmData, filterData} from './data.js';
import {createLayoutFromArray} from './components/utils.js';
import {createSearchLayout} from './components/search.js';
import {getUserGrade, createProfileLayout} from './components/profile.js';
import {createMenuLayout} from './components/menu.js';
import {createSortLayout} from './components/sort.js';
import {createFilmContainerLayout} from './components/film-container.js';
import {createFilmCardLayout} from './components/film-card.js';
import {createFooterStatisticsLayout} from './components/footer-statistics';
import {createFilmDetailsLayout} from './components/film-details.js';

const NUMBER_OF_CARDS = {
  total: 18,
  default: 5,
  rated: 2,
  commented: 2
};

const renderComponent = (container, layout, position = `beforeend`) => {
  container.insertAdjacentHTML(position, layout);
};

const headerContainer = document.querySelector(`.header`);
const mainContainer = document.querySelector(`.main`);
const footerContainer = document.querySelector(`.footer`);

const films = new Array(NUMBER_OF_CARDS.total).fill(``).map(filmData);
const filter = filterData(films);
const userTitle = getUserGrade(films);

renderComponent(headerContainer, createSearchLayout());
renderComponent(headerContainer, createProfileLayout(userTitle));
renderComponent(mainContainer, createMenuLayout(filter));
renderComponent(mainContainer, createSortLayout());

const sortByTopCommented = (films) => {
  return films.slice().sort((a, b) => {
    return b.comments.length - a.comments.length;
  });
};

const sortByRating = (films) => {
  return films.slice().sort((a, b) => b.rating - a.rating);
};

const sortingToSortingFunctionName = {
  'top-rated': sortByRating,
  'top-commented': sortByTopCommented
};

export const sortMovies = (films, sorting) => {
  return sortingToSortingFunctionName[sorting](films);
};

const filmsTopRated = sortMovies(films, `top-rated`).slice(0, NUMBER_OF_CARDS.rated);
const filmsMostCommented = sortMovies(films, `top-commented`).slice(0, NUMBER_OF_CARDS.commented);

renderComponent(mainContainer, createFilmContainerLayout(films.slice(0, NUMBER_OF_CARDS.default), filmsTopRated, filmsMostCommented));

const showMoreButton = mainContainer.querySelector(`.films-list__show-more`);
const moviesContainer = mainContainer.querySelector(`.films-list__container`);

let moviesRenderedCount = films.length < NUMBER_OF_CARDS.total ? films.length : NUMBER_OF_CARDS.default;
let moviesToRenderCount = films.length - moviesRenderedCount;

const onShowMoreButtonClick = () => {
  const moviesToRender = films.slice(moviesRenderedCount, moviesRenderedCount + NUMBER_OF_CARDS.default);

  renderComponent(moviesContainer, createLayoutFromArray(moviesToRender, createFilmCardLayout));

  moviesRenderedCount += NUMBER_OF_CARDS.default;
  moviesToRenderCount = films.length - moviesRenderedCount;

  if (moviesToRenderCount <= 0) {
    showMoreButton.classList.add(`visually-hidden`);
    showMoreButton.removeEventListener(`click`, onShowMoreButtonClick);
  }
};

showMoreButton.addEventListener(`click`, onShowMoreButtonClick);

renderComponent(footerContainer, createFooterStatisticsLayout(films.length));
renderComponent(footerContainer, createFilmDetailsLayout(films[0]), 'afterend');
