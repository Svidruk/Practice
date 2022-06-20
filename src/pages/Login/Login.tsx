import Auth from '@components/Auth/Auth';
import { Paths } from '@enums/Paths';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
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
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Welcome!</h1>
        <div className={styles.subTitle}>Enter information below for login</div>
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
              <div className={styles.inputBlocks}>
                <div className={styles.inputBlock}>
                  <Field className={styles.inputField} type="email" name="email" placeholder="Email" />
                  <ErrorMessage component="div" name="email" className={styles.errorField} />
                </div>
                <div className={styles.inputBlock}>
                  <Field className={styles.inputField} type="password" name="password" placeholder="Password" />
                  <ErrorMessage component="div" name="password" className={styles.errorField} />
                </div>
              </div>
              <button className={styles.button} type="submit">
                Login
              </button>
            </Form>
          )}
        </Formik>
        <div className={styles.footer}>
          Next user?
          <Link to={Paths.register} className={styles.link}>
            Sign up
          </Link>
        </div>
      </div>
    </Auth>
  );
};
