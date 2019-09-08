export const getRandomElementArray = (array) => array[Math.floor(Math.random() * array.length)];
export const getRandomFromRange = (min, max) => Math.round(Math.random() * (max - min) + min);
export const getRandomBoolean = () => Boolean(Math.round(Math.random()));
export const getReleaseDateString = (date) => date.toLocaleString(`en-GB`, {day: `numeric`, month: `long`, year: `numeric`});
export const createUniqueList = (list, length) => {
  const setList = new Set();

  for (let i = 0; i < length; i++) {
    setList.add(getRandomElementArray(list));
  }

  return Array.from(setList);
};

export const createLayoutFromArray = (items, createLayout) => {
  const templates = items.map((item) => createLayout(item));

  return templates.join(``);
};
