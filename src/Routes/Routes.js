import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Foods from '../Pages/Foods';
import Drinks from '../Pages/Drinks';
import FoodDetails from '../Pages/FoodDetails';
import DrinkDetails from '../Pages/DrinkDetails';
import FoodInProgress from '../Pages/FoodInProgress';
import DrinkInProgress from '../Pages/DrinkInProgress';
import Explore from '../Pages/Explore';
import ExploreFood from '../Pages/ExploreFood';
import ExploreDrink from '../Pages/ExploreDrink';
import ExploreFoodIngredient from '../Pages/ExploreFoodIngredient';
import ExploreDrinkIngrediet from '../Pages/ExploreDrinkIngredient';
import ExploreFoodNation from '../Pages/ExploreFoodNation';
import Profile from '../Pages/Profile';
import RecipeDone from '../Pages/RecipeDone';
import FavRecipe from '../Pages/FavRecipe';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Pagina Login */}
        <Route exact path="/" component={ Login } />
        <Route exact path="/foods" component={ Foods } />
        <Route exact path="/drinks" component={ Drinks } />
        <Route exact path="/foods/:id" component={ FoodDetails } />
        <Route exact path="/drinks/:id" component={ DrinkDetails } />
        <Route exact path="/foods/:id/in-progress" component={ FoodInProgress } />
        <Route exact path="/drinks/:id/in-progress" component={ DrinkInProgress } />
        <Route exact path="/explore" component={ Explore } />
        <Route exact path="/explore/foods" component={ ExploreFood } />
        <Route exact path="/explore/drinks" component={ ExploreDrink } />
        <Route
          exact
          path="/explore/foods/ingredients"
          component={ ExploreFoodIngredient }
        />
        <Route
          exact
          path="/explore/drinks/ingredients"
          component={ ExploreDrinkIngrediet }
        />
        <Route
          exact
          path="/explore/foods/nationalities"
          component={ ExploreFoodNation }
        />
        <Route exact path="/profile" component={ Profile } />
        <Route exact path="/done-recipes" component={ RecipeDone } />
        <Route exact path="/favorite-recipes" component={ FavRecipe } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
