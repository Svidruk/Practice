import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const SignUpForm = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}>
      {formik => (
        <div className='form'>
          <Form>
            <h1 className='label'>Sign Up</h1>
            <h4 className='label2'>Just a few quick steps to create your account</h4>
              <div className='box1'>
                <TextField className="inputField spaced" placeholder="First Name" name="firstName" type="text" />
                <TextField className="inputField spaced" placeholder="Last Name" name="lastName" type="text" />
              </div>
            <TextField className="inputField" placeholder="Email" name="email" type="email" />
            <TextField className="inputField" placeholder="Password" name="password" type="password" />
            <TextField className="inputField" placeholder="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn" type="submit">Next</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}