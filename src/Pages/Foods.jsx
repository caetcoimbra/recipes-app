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
      <div>
        <Header pageName="Foods" />
      </div>
      <div className="d-flex flex-row justify-content-center mt-4">
        <CategoryButtons />
      </div>
      <section className="content">
        {filter === '' ? (<CardList />) : (<Filtered />)}
        <Filtered />
      </section>
      <Footer />
    </div>
  );
}

export default Foods;
