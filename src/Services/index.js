const urlFilterDrinks = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';
const urlFilterFoods = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
let urlFilter = '';

const getRecipesByFilter = async (type, filter, input) => {
  if (type === 'Foods') {
    urlFilter = urlFilterFoods;
  } else if (type === 'Drinks') {
    urlFilter = urlFilterDrinks;
  }
  let choosenFilter = `i=${input}`;
  switch (filter) {
  case 'Name':
    choosenFilter = `s=${input}`;
    break;
  case 'First Letter':
    choosenFilter = `f=${input}`;
    break;
  default:
    choosenFilter = `i=${input}`;
  }
  console.log(`${urlFilter}${choosenFilter}`);
  const response = await fetch(`${urlFilter}${choosenFilter}`);
  const responseJson = await response.json();
  console.log(responseJson);
  return responseJson;
};

export default getRecipesByFilter;
