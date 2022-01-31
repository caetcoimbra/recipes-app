const foodUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const fetchingFoods = () => fetch(foodUrl)
  .then((response) => response.json())
  .catch((error) => global.alert(error));

export default fetchingFoods;
