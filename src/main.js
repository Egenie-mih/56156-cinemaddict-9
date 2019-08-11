import {createSearchLayout} from './components/search.js';
import {createProfileLayout} from './components/profile.js';
import {createMenuLayout} from './components/menu.js';
import {createSortLayout} from './components/sort.js';
import {createFilmCardLayout} from './components/film-card.js';
import {createFilmContainerLayout} from './components/film-container.js';
import {createFilmDetailsLayout} from './components/film-details.js';
import {createShowMoreButtonLayout} from './components/show-more-button.js';

const NUMBER_OF_CARDS = {
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

renderComponent(headerContainer, createSearchLayout());
renderComponent(headerContainer, createProfileLayout());
renderComponent(mainContainer, createMenuLayout());
renderComponent(mainContainer, createSortLayout());
renderComponent(mainContainer, createFilmContainerLayout());

const filmList = document.querySelector(`.films-list`);

renderComponent(filmList, createShowMoreButtonLayout(), `beforeend`);

const filmListContainer = mainContainer.querySelectorAll(`.films-list__container`);

filmListContainer.forEach((element, index) => {
  let key = Object.keys(NUMBER_OF_CARDS)[index];
  for (let i = 0; i < NUMBER_OF_CARDS[key]; i++) {
    renderComponent(element, createFilmCardLayout());
  }
});

renderComponent(footerContainer, createFilmDetailsLayout(), `afterend`);
