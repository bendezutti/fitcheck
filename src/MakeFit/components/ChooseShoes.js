import React from 'react';
import Shoes from './Shoes';

const ChoosePants = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No shoes found.</h2>
      </div>
    );
  }

  return (
    <div> 
      {props.items.map(shoes => (
        <Shoes
          key={shoes.id}
          id={shoes.id}
          image={shoes.shoeImage}
          description={shoes.description}
        />
      ))}
      </div>
  );
};

export default ChoosePants;
