export const getUserGrade = (cardsArray) => {
  let watchedCount = 0;
  let watchedTitle;
  cardsArray.forEach((card) => {
    watchedCount = card.isArchive ? watchedCount += 1 : watchedCount;
  });

  switch (true) {
    case watchedCount === 0:
      watchedTitle = ``;
      break;
    case (watchedCount > 0 && watchedCount <= 10):
      watchedTitle = `novice`;
      break;
    case (watchedCount > 10 && watchedCount <= 20):
      watchedTitle = `fan`;
      break;
    case watchedCount > 20:
      watchedTitle = `movie buff`;
      break;
    default:
      watchedTitle = ``;
  }

  return watchedTitle;
};

export const createProfileLayout = (watchedCount) => `
  <section class="header__profile profile">
    <p class="profile__rating">${watchedCount}</p>
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>
`;
