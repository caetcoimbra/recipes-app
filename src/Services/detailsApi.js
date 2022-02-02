const urlFood = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';
const urlDrink = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
let urlSwitch = '';

async function fetchDetailsApi(id, type) {
  if (type === 'food') {
    urlSwitch = urlFood;
  } else if (type === 'drink') {
    urlSwitch = urlDrink;
  }
  const urlApi = `${urlSwitch}${id}`;
  console.log(urlApi);
  try {
    const response = await fetch(urlApi);
    const responseJSON = await response.json();
    return responseJSON;
  } catch (error) {
    console.log(error);
  }
}

export default fetchDetailsApi;
