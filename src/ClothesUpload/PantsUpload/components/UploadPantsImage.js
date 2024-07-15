import React from 'react';
import ImageUpload from '../../../shared/components/ImageUpload';
import { useHistory } from 'react-router-dom';
import { useHttpClient } from '../../../shared/hooks/http-hook';
import { useForm } from '../../../shared/hooks/form-hook';

const UploadPantsImage = () => {
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

  const submitHandler = async event => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append('image', formState.inputs.image.value);

      await sendRequest(
        'http://localhost:3001/api/clothes/pants',
        'POST',
        formData
      );

      history.push('/shoes');
    } catch (err) {
      console.error('Request error:', err);
      // Handle error appropriately
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <ImageUpload id="image" onInput={inputHandler} />
        <button type="submit">
          Upload Image
        </button>
      </form>
    </div>
  );
};

export default UploadPantsImage;
