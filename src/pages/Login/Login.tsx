import Auth from '@components/Auth/Auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useStyles } from './Login.styles';

export const Login = () => {
  const styles = useStyles();

  const validate = Yup.object({
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
  });

  return (
    <Auth>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validate}
        onSubmit={() => {
          // console.log(values);
        }}
      >
        {() => (
          <Form>
            <h1 className="label">Welcome</h1>
            <h4 className="label2">Enter information below for login</h4>
            <Field className={styles.inputField} type="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" />

            <Field className={styles.inputField} type="password" name="password" placeholder="Password" />
            <ErrorMessage name="password" />

            <button className="btn" type="submit">
              Login
            </button>
          </Form>
        )}
      </Formik>
      <h4 className="link-label">
        Next user ?
        <a className="link" href={'/SignUp'}>
          {' '}
          Sign up
        </a>
      </h4>
    </Auth>
  );
};
