import React, { useEffect, useState } from 'react';
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./Makefit.css";

const AllItems = () => {
  const { sendRequest } = useHttpClient();
  const [loadShirts, setShirts] = useState([]);
  const [loadPants, setPants] = useState([]);
  const [loadShoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShirts = async () => {
      try {
        const shirtResponse = await sendRequest('http://localhost:3001/api/clothes/shirts');
        console.log('Shirts:', shirtResponse.shirt);
        setShirts(shirtResponse.shirt);
      } catch (err) {
        console.error('Failed to fetch shirts:', err);
      }
    };

    const fetchPants = async () => {
      try {
        const pantsResponse = await sendRequest('http://localhost:3001/api/clothes/pants');
        console.log('Pants:', pantsResponse.pants);
        setPants(pantsResponse.pants);
      } catch (err) {
        console.error('Failed to fetch pants:', err);
      }
    };

    const fetchShoes = async () => {
      try {
        const shoesResponse = await sendRequest('http://localhost:3001/api/clothes/shoes');
        console.log('Shoes:', shoesResponse.shoes);
        setShoes(shoesResponse.shoes);
      } catch (err) {
        console.error('Failed to fetch shoes:', err);
      }
    };

    fetchShirts();
    fetchPants();
    fetchShoes();
  }, [sendRequest]);

  return (
    <div className="container">
        <h1> All Clothing Items </h1>
      <div className="fit">
        <div>
          <div>
            <div>
              <div>
                <h3>Shirts</h3>
                <div className="items">
                  {loadShirts.map((shirts) => (
                    <div key={shirts.id} className="userItem">
                      <img src={`localhost:3001/${shirts.shirtsImage}`} alt='' />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3>Pants</h3>
                <div className="items">
                  {loadPants.map((pants) => (
                    <div key={pants.id} className="userItem">
                      <img src={`localhost:3001/${pants.pantsImage}`} alt='' />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3>Shoes</h3>
                <div className="items">
                  {loadShoes.map((shoes) => (
                    <div key={shoes.id} className="outfit-item">
                      <img src={`localhost:3001/${shoes.shoesImage}`} alt='' />
                    </div>
                  ))}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllItems;
