export const createFilmCardLayout = ({title, rating, poster, description, releaseDate, genres, duration, isToWatchlist, isArchive, isFavorite, comments}) => `
  <article class="film-card">
    <h3 class="film-card__title">${title}</h3>
    <p class="film-card__rating">${rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${releaseDate.getFullYear()}</span>
      <span class="film-card__duration">${duration}</span>
      <span class="film-card__genre">${genres.join(` `)}</span>
    </p>
    <img src="${poster}" alt="" class="film-card__poster">
    <p class="film-card__description">${description}</p>
    <a class="film-card__comments">${comments.length} comments</a>
     <form class="film-card__controls">
       <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${isToWatchlist ? `film-card__controls-item--active` : ``}">Add to watchlist</button>
       <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${isArchive ? `film-card__controls-item--active` : ``}">Mark as watched</button>
       <button class="film-card__controls-item button film-card__controls-item--favorite ${isFavorite ? `film-card__controls-item--active` : ``}">Mark as favorite</button>
    </form>
  </article>
`;
