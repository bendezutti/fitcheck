import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import Input from '../../shared/components/Input'
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './LoginForm.css';

import { useHttpClient } from '../../shared/hooks/http-hook';



const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);

  
  const { isLoading, sendRequest } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const history = useHistory();

  const authSubmitHandler = async event => {
    event.preventDefault();

    //STEP 3: verify our inputs with image upload
    console.log(formState.inputs);
 
    if(isLoginMode){

      try {
        //we do not care about the response data for this component
        const responseData = await sendRequest (
          'http://localhost:3001/api/users/login', 
          'POST',
          JSON.stringify(   
            {
              //'name': formState.inputs.name.value,  
              'email': formState.inputs.email.value,
              'password': formState.inputs.password.value,
          }),
          {
            'Content-Type' : 'application/json'
          }
        );
        console.log(responseData.token)
        auth.login(responseData.userId, responseData.token);


        history.push('/myfits')

        }
        catch(err) {
          console.log(err);
        }
    }
    
  };

  return (
    <div className="authentication">
      <h2>Please Login</h2>
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />
        <button type="submit" disabled={!formState.isValid}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
