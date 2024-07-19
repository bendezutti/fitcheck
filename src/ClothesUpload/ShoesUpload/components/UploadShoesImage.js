//Author: Ben DeZutti
//Class: Web Programming

import React from 'react';
import ImageUpload from '../../../shared/components/ImageUpload';
import { useHistory } from 'react-router-dom';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import { useForm } from '../../../shared/hooks/form-hook';

const UploadShoeImage = () => {
  const { sendRequest } = useHttpClient();

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

  const submitHandler = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', formState.inputs.image.value);

      await sendRequest(
        'http://localhost:3001/api/clothes/shoes',
        'POST',
        formData
      );

      history.push('/allitems');
    } catch (err) {
      console.error('Request error:', err);
    }
  };

  return (
    <div>
      <div> 
        <h1> Upload Shoes </h1>
      </div>
      <form onSubmit={submitHandler}>
        <ImageUpload id="image" onInput={inputHandler} />
        <button type="submit">
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default UploadShoeImage;
