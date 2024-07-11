// Author: Benjamin DeZutti
// Web Programming - Summer 2024
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';
import { useHttpClient } from "../../shared/hooks/http-hook";
import { useForm } from '../../shared/hooks/form-hook';
import {useDrag} from 'react-dnd'

import "./Makefit.css";
import ClothingSelector from "./ClothingSelector";

const MakeFit = () => {
  const { isLoading, sendRequest } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      shirt: {
        value: '',
        isValid: false
      },
      pants: {
        value: '',
        isValid: false
      },
      shoes: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const history = useHistory();

  const fitSave = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('shirt', formState.inputs.shirt.value);
      formData.append('pants', formState.inputs.pants.value);
      formData.append('shoes', formState.inputs.shoes.value);

      await sendRequest(
        'http://localhost:3001/api/makefit',
        'POST',
        formData
      );

      history.push('/:user/fits');
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div className="fit">
        <div>
          <h1> Put the fit together! </h1>
        </div>

        <div className="shirt">
          <p> Shirt </p>
        </div>

        <div className="pants">
          <p> Pants </p>
        </div>

        <div className="shoes">
          <p> Shoes </p>
        </div>
      </div>

      {/*This component will retrieve the items from the ClothesUploaded pages */}
      <ClothingSelector />

      <div className='saveFit'>
        <Link to='/fits'> 
        <button onClick={fitSave} >
          Save
        </button>
        </Link>
      </div>
    </div>
  );
}

export default MakeFit;
