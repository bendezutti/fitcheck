import React from 'react';
import './Shoes.css';

const Shoes = props => {
  return (
    <div className="image-upload__preview">
      <img src={`http://localhost:3001/${props.image}`} alt={props.description} />
    </div>
  );
};

export default Shoes;