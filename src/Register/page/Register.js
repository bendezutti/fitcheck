import React, { useState, useContext } from 'react';
import Input from '../../shared/components/Input';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './Register.css';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import { useHttpClient } from '../../shared/hooks/http-hook';

const Register = () => {
  const auth = useContext(AuthContext);
  const { isLoading, sendRequest } = useHttpClient();

  const [formState, inputHandler, setFormData] = useForm(
    {
      name: {
        value: '',
        isValid: false
      },
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

  const authSubmitHandler = async event => {
    event.preventDefault();

    // Print form data to console
    console.log('Form Data:', formState.inputs);

    try {
      const formData = new FormData();
      formData.append('name', formState.inputs.name.value);
      formData.append('email', formState.inputs.email.value);
      formData.append('password', formState.inputs.password.value);

      const responseData = await sendRequest(
        'http://localhost:3001/api/users/signup',
        'POST',
        formData
      );

      console.log('Response Data:', responseData);

      auth.login();
    } catch (err) {
      console.log('Error:', err);
    }
  };

  return (
    <div className="authentication">
      <h2>Please Register</h2>
      <form onSubmit={authSubmitHandler}>
        <Input
          element="input"
          id="name"
          type="text"
          label="Your Name"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a name."
          onInput={inputHandler}
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
