import React, { useContext } from 'react';
import {useHistory} from 'react-router-dom'
import Input from '../../shared/components/Input';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useHttpClient } from '../../shared/hooks/http-hook';
import './Register.css';


const Register = () => {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      },
    },
    false
  );

  const history = useHistory();

  const authSubmitHandler = async event => {
    event.preventDefault();
    try {
       await sendRequest(
        'http://localhost:3001/api/users/signup',
        'POST',
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value
        }),
        {
          'Content-Type': 'application/json'
        }
      );

      auth.login();
    } catch (err) {
      console.log('Error:', err);
    }
    history.push('/login')
  };

  return (
    <div className="authentication">
      <h2> Register</h2>
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL(), VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6), VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid password, at least 6 characters."
          onInput={inputHandler}
        />
        <button type="submit" disabled={isLoading}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
