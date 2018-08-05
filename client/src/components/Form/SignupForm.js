import React, { Component } from 'react';
import FormField from './FormField';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  formSubmit = value => {
    console.log(value);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.formSubmit)}>
        <Field
          name='username'
          component={FormField}
          label='Username'
        />
        <Field
          name='password'
          component={FormField}
          label='Password'
          type='password'
        />
        <Field
          name='email'
          component={FormField}
          label='Email'
          type='email'
        />
        <button type='submit'>Sign Up</button>
      </form>
    );
  }
}

function validate(value) {
  const errors = {};
  if (!value.username) {
    errors.username = 'Username Required!'
  }
  if (!value.password) {
    errors.password = 'Password Required!'
  }
  if (!value.email) {
    errors.email = 'Email Required!'
  }
  return errors;
};

export default reduxForm({ validate, form: 'value' })(Form);
