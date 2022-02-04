import React, { useContext, useEffect } from 'react';
import CardList from '../Components/CardList';
import CategoryButtons from '../Components/CategoryButtons';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';
import Filtered from '../Components/Filtered';

function Foods() {
  const { setSearchBtn, filter } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(true);
  });

  return (
    <div>
      <Header pageName="Foods" />
      <section className="content">
        <CategoryButtons />
        {filter === '' ? (<CardList />) : (<Filtered />)}
        <Footer />
      </section>
    </div>
  );
}

export default Foods;
