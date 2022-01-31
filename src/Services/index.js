const urlFilterDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/';
const urlFilterFoods = 'https://www.themealdb.com/api/json/v1/1/';
let urlFilter = '';

const getRecipesByFilter = async (type, filter, input) => {
  if (type === 'Foods') {
    urlFilter = urlFilterFoods;
  } else if (type === 'Drinks') {
    urlFilter = urlFilterDrinks;
  }
  let choosenFilter = `filter.php?i=${input}`;
  switch (filter) {
  case 'Name':
    choosenFilter = `search.php?s=${input}`;
    break;
  case 'First Letter':
    choosenFilter = `search.php?f=${input}`;
    break;
  default:
    choosenFilter = `filter.php?i=${input}`;
  }
  console.log(`${urlFilter}${choosenFilter}`);
  const response = await fetch(`${urlFilter}${choosenFilter}`);
  const responseJson = await response.json();
  console.log(responseJson);
  return responseJson;
};

export default getRecipesByFilter;
