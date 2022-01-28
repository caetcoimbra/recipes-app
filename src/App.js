import React from 'react';
import './App.css';
import Routes from './Routes/Routes';
import RecipeContext from './Context/RecipeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RecipeContext.Provider>
      <Routes />
    </RecipeContext.Provider>
  );
}

export default App;
