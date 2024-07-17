import React from 'react';

const MyFits = ({ shirt, pants, shoes, onSaveFit }) => {
  return (
    <div className="fit-summary">
      <div>
        <h1>Fit Summary</h1>
      </div>

      <div className="shirts">
        <h2>Shirts</h2>
        <ul>
          {shirt.map(shirt => (
            <li key={shirt.id}>
              <img src={`http://localhost:3001/${shirt.shirtImage}`} alt={shirt.description} />
            </li>
          ))}
        </ul>
      </div>

      <div className="pants">
        <h2>Pants</h2>
        <ul>
          {pants.map(pant => (
            <li key={pant.id}>
              <img src={`http://localhost:3001/${pant.pantsImage}`} alt={pant.description} />
            </li>
          ))}
        </ul>
      </div>

      <div className="shoes">
        <h2>Shoes</h2>
        <ul>
          {shoes.map(shoe => (
            <li key={shoe.id}>
              <img src={`http://localhost:3001/${shoe.shoeImage}`} alt={shoe.description} />
            </li>
          ))}
        </ul>
      </div>

      <div className="saveFit">
        <button onClick={onSaveFit}>Save</button>
      </div>
    </div>
  );
};

export default MyFits;
