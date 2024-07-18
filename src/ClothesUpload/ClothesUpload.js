import React from 'react';
import ImageUpload from '../../../shared/components/ImageUpload';
import { useHistory } from 'react-router-dom';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import { useForm } from '../../../shared/hooks/form-hook';
import './UploadShirtImage.css'

const ClothesUpload = () => {
  const { isLoading, error, sendRequest } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      image: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const history = useHistory();

  const submitShirt = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', formState.inputs.image.value);

      await sendRequest(
        'http://localhost:3001/api/clothes/shirts',
        'POST',
        formData
      );


      history.push('/pants');
    } catch (err) {
      console.error('Request error:', err);
      // Handle error appropriately
    }
  }; 


  const submitPants = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', formState.inputs.image.value);

      await sendRequest(
        'http://localhost:3001/api/clothes/pants',
        'POST',
        formData
      );


      history.push('/pants');
    } catch (err) {
      console.error('Request error:', err);
      // Handle error appropriately
    }
  }; 


      
  const submitShoes = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', formState.inputs.image.value);

      await sendRequest(
        'http://localhost:3001/api/clothes/shoes',
        'POST',
        formData
      );


      history.push('/pants');
    } catch (err) {
      console.error('Request error:', err);
      // Handle error appropriately
    }
  }; 


  
  return (
    <div>
      <div className='page'>
        <h1> Upload Shirt </h1>
      </div>
      <div className='uploadShirt'>
        <form onSubmit={submitShirt}>
          <ImageUpload id="image" onInput={inputHandler} />
          <button type="submit" className='uploadButton'>
            Upload Image
          </button>
        </form>

        <form onSubmit={submitPants}>
          <ImageUpload id="image" onInput={inputHandler} />
          <button type="submit" className='uploadButton'>
            Upload Image
          </button>
        </form>

        <form onSubmit={submitShoes}>
          <ImageUpload id="image" onInput={inputHandler} />
          <button type="submit" className='uploadButton'>
            Upload Image
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClothesUpload.js;
