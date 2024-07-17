import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useHttpClient } from "../../shared/hooks/http-hook";
import ChooseShirt from './ChooseShirt';
import ChoosePants from './ChoosePants';
import ChooseShoes from './ChooseShoes';
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
        setShirts(shirtResponse.shirt);
      } catch (err) {
        console.error('Failed to fetch shirts:', err);
      }
    };

    const fetchPants = async () => {
      try {
        const pantsResponse = await sendRequest('http://localhost:3001/api/clothes/pants');
        setPants(pantsResponse.pants);
      } catch (err) {
        console.error('Failed to fetch pants:', err);
      }
    };

    const fetchShoes = async () => {
      try {
        const shoesResponse = await sendRequest('http://localhost:3001/api/clothes/shoes');
        setShoes(shoesResponse.shoes);
      } catch (err) {
        console.error('Failed to fetch shoes:', err);
      }
    };

    fetchShirts();
    fetchPants();
    fetchShoes();
  }, [sendRequest]);

  const history = useHistory();

  const fitSave = async event => {
    event.preventDefault();
    try {

      const fitData = {
        shirts: loadShirts.map(shirt => shirt.id), 
        pants: loadPants.map(pants => pants.id),
        shoes: loadShoes.map(shoes => shoes.id)
      };
  
      await sendRequest(
        'http://localhost:3001/api/clothes/myfits',
        'POST',
        JSON.stringify(fitData),
        { 'Content-Type': 'application/json' }
      );
  
      history.push('/home');
    } catch (error) {
      console.error('Failed to save fit:', error);
    }
  };
  
  return (
    <div>
      <div className="fit">
        <div>
          <h1> Put the fit together! </h1>
        </div>

        <div className="shirt">
        <ChooseShirt items={loadShirts} />
        </div>

        <div className="pants">
        <ChoosePants items={loadPants}/> 
        </div>

        <div className="shoes">
          <ChooseShoes items={loadShoes}/> 
        </div>
      </div>


      <div className='saveFit'>
        <button onClick={fitSave}>
          Save
        </button>
      </div>

    </div>
  );
}

export default MakeFit;
