import React, { useEffect, useContext } from 'react';
import CardList from '../Components/CardList';
import CategoryButtons from '../Components/CategoryButtons';
import Filtered from '../Components/Filtered';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function Drinks() {
  const { setSearchBtn, filter } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(true);
  });
  return (
    <div>
      <Header pageName="Drinks" />
      <section className="content">
        <CategoryButtons />
        {filter === '' ? (<CardList />) : (<Filtered />)}
        <Filtered />
      </section>
      <Footer />
    </div>
  );
}

export default Drinks;
