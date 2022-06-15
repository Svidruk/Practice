import Auth from '@components/Auth/Auth';
import { Paths } from '@enums/Paths';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useStyles } from './Register.styles';

export const Register = () => {
  const styles = useStyles();

  const validate = Yup.object({
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Email is invalid').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 charaters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  });

  return (
    <Auth isRegisterPage>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Sign Up</h1>
        <div className={styles.subTitle}>Just a few quick steps to create your account</div>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={validate}
          onSubmit={() => {
            // console.log(values);
          }}
        >
          {() => (
            <Form>
              <div className={styles.inputBlocks}>
                <div className={styles.inputBlockCombine}>
                  <div className={styles.inputBlock}>
                    <Field className={styles.inputField} type="text" name="firstName" placeholder="First Name" />
                    <ErrorMessage component="div" name="firstName" className={styles.errorField} />
                  </div>
                  <div className={styles.inputBlock}>
                    <Field className={styles.inputField} type="text" name="lastName" placeholder="Last Name" />
                    <ErrorMessage component="div" name="lastName" className={styles.errorField} />
                  </div>
                </div>
                <div className={styles.inputBlock}>
                  <Field className={styles.inputField} type="email" name="email" placeholder="Email" />
                  <ErrorMessage component="div" name="email" className={styles.errorField} />
                </div>
                <div className={styles.inputBlock}>
                  <Field className={styles.inputField} type="password" name="password" placeholder="Password" />
                  <ErrorMessage component="div" name="password" className={styles.errorField} />
                </div>
                <div className={styles.inputBlock}>
                  <Field
                    className={styles.inputField}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                  />
                  <ErrorMessage component="div" name="confirmPassword" className={styles.errorField} />
                </div>
              </div>

              <button className={styles.button} type="submit">
                Next
              </button>
            </Form>
          )}
        </Formik>
        <div className={styles.footer}>
          Back to
          <Link to={Paths.login} className={styles.link}>
            Login
          </Link>
        </div>
      </div>
    </Auth>
  );
};
