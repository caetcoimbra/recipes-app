import React, { useEffect, useContext } from 'react';
import Header from '../Components/Header';
import RecipeContext from '../Context/RecipeContext';

function Profile() {
  const { setSearchBtn } = useContext(RecipeContext);
  useEffect(() => {
    setSearchBtn(false);
  });
  return (
    <Header pageName="Profile" />
  );
}

export default Profile;
