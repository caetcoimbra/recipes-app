const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const fetchingDrinks = () => fetch(drinkUrl)
  .then((response) => response.json())
  .catch((error) => global.alert(error));

export default fetchingDrinks;
