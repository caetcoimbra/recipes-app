import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function Profile() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  const email = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const favoriteRedirect = () => {
    history.push('/favorite-recipes');
  };
  const doneRedirect = () => {
    history.push('/done-recipes');
  };
  const logout = () => {
    localStorage.clear();
    history.push('/');
  };
  return (
    <>
      <Header pageName="Profile" />
      <div>
        <span data-testid="profile-email">{email.email}</span>
        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ doneRedirect }
        >
          Done Recipes
        </button>
        <button
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ favoriteRedirect }
        >
          Favorite Recipes
        </button>
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ logout }
        >
          Logout
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
