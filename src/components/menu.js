const FILTERS = [
  `All movies`,
  `Watchlist`,
  `History`,
  `Favorites`
];

const findCountFilter = (filtersData, filterTitle) => filtersData.find((filter) => filter.title === filterTitle).count;
const getFilterTemplate = (filtersData, filter) => `
  <a href="#${filter.toLowerCase()}" class="main-navigation__item">
    ${filter}
    ${filter === `All movies` ? `` : `
    <span class="main-navigation__item-count">
      ${findCountFilter(filtersData, filter)}
    </span>`}
  </a>
`;

export const createMenuLayout = (filtersData) => `
  <nav class="main-navigation">
    ${FILTERS.map((filter) => getFilterTemplate(filtersData, filter)).join(` `)}
    <a href="#stats" class="main-navigation__item main-navigation__item--additional">Stats</a>
  </nav>
`;
