import InputCommon from '@components/InputCommon/InputCommon';
import React, { useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Login() {
  const { container, labelSidebar, remember, lost, btnLogin } = styles;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid Email!!!')
        .required('Email is required!'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required!')
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });

  return (
    <div className={container}>
      <div className={labelSidebar}>SIGN IN</div>
      <form action='' onSubmit={formik.handleSubmit}>
        <InputCommon
          id='email'
          label={'Username or email'}
          type={'text'}
          isRequired
          formik={formik}
        />
        <InputCommon
          id='password'
          label={'Password'}
          type={'password'}
          isRequired
          formik={formik}
        />
        <div className={remember}>
          <input type='checkbox' name='' id='' />
          <span>Remember me</span>
        </div>
        <div className={btnLogin}>
          <Button content={'LOGIN'} type='submit' />
        </div>
      </form>
      <p className={lost}>Lost your password?</p>
    </div>
  );
}

export default Login;
