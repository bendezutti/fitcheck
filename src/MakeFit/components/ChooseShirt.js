import React from 'react';
import Shirt from './Shirt';

const ChooseShirt = props => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>No shirts found.</h2>
      </div>
    );
  }

  return (
    <div>
      {props.items.map(shirt => (
        <Shirt
          key={shirt.id}
          id={shirt.id}
          image={shirt.shirtImage}  
        />
      ))}
    </div>
  );
};

export default ChooseShirt;
