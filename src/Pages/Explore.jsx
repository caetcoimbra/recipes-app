import React from 'react';
import Button from '../Components/Button';

function Explore() {
  //   const redirectTo = () => {

  //   };

  return (
    <section>
      <Button
        btnType="button"
        btnTestId="explore-foods"
        btnMethod={ () => {} }
        btnText="Explore Foods"
      />
      <Button
        btnType="button"
        btnTestId="explore-drinks"
        btnMethod={ () => {} }
        btnText="Explore Drinks"
      />
    </section>
  );
}

export default Explore;
