import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Components/Header';

function Explore() {
  return (
    <>
      <Header pageName="Explore" />
      <section>
        <Link to="/explore/foods">
          <div data-testid="explore-foods" className="explore-btn">Explore Foods</div>
        </Link>
        <Link to="/explore/drinks">
          <div data-testid="explore-drinks" className="explore-btn">Explore Drinks</div>
        </Link>
      </section>
    </>
  );
}

export default Explore;
