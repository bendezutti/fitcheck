import React from 'react';
import Pants from './Pants';

const ChoosePants = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No pants found.</h2>
      </div>
    );
  }

  return (
    <div> 
      {props.items.map(pants => (
        <Pants
          key={pants.id}
          id={pants.id}
          image={pants.pantsImage}
          description={pants.description}
        />
      ))}
      </div>
  );
};

export default ChoosePants;
