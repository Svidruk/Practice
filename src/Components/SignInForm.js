import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const SignInForm = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  })
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}>
      {formik => (
        <div className='login-form'>
          <Form>
            <h1 className='label'>Welcome</h1>
            <h4 className='label2'>Enter information below for login</h4>
            <TextField className="inputField" placeholder="Email" name="email" type="email" />
            <TextField className="inputField" placeholder="password" name="password" type="password" />
            <button className="btn" type="submit">Login</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}