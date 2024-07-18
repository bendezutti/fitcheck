import React, { useEffect, useState } from 'react';
import { useHttpClient } from "../../shared/hooks/http-hook";
import "./Makefit.css";

const MakeFit = () => {
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
      <div className="fit">
        <h1>All Fits</h1>
        <div className="outfit-card">
          <div className="item-card">
            <div className="card-body">
              <h2>Outfit</h2>
              <div className="outfit-section">
                <h3>Shirts</h3>
                <div className="outfit-items">
                  {loadShirts.map((item) => (
                    <div key={item.id} className="outfit-item">
                      <img src={item.imageUrl} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="outfit-section">
                <h3>Pants</h3>
                <div className="outfit-items">
                  {loadPants.map((item) => (
                    <div key={item.id} className="outfit-item">
                      <img src={item.imageUrl} alt={item.name} />
                      <p>{item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="outfit-section">
                <h3>Shoes</h3>
                <div className="outfit-items">
                  {loadShoes.map((item) => (
                    <div key={item.id} className="outfit-item">
                      <img src={item.imageUrl} alt={item.name} />
                      <p>{item.name}</p>
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

export default MakeFit;
