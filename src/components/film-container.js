import {createLayoutFromArray} from './utils';
import {createFilmCardLayout} from './film-card';
import {createShowMoreButtonLayout} from './show-more-button';

export const createFilmContainerLayout = (films, topRated, mostCommented) => `
  <section class="films">
    <section class="films-list">
      <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      <div class="films-list__container">
        ${createLayoutFromArray(films, createFilmCardLayout)}
      </div>
       ${createShowMoreButtonLayout()}
    </section>

    <section class="films-list--extra">
      <h2 class="films-list__title">Top rated</h2>
      <div class="films-list__container">
        ${createLayoutFromArray(topRated, createFilmCardLayout)}
      </div>
    </section>

    <section class="films-list--extra">
      <h2 class="films-list__title">Most commented</h2>
      <div class="films-list__container">
        ${createLayoutFromArray(mostCommented, createFilmCardLayout)}
      </div>
    </section>
  </section>
`;
