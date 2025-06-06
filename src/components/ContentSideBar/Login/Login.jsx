import InputCommon from '@components/InputCommon/InputCommon';
import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn } from '@/apis/authService';
import Cookies from 'js-cookie';
import { getInfo } from '@/apis/authService';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { StoreContext } from '@/contexts/storeProvider';

function Login() {
  const { container, labelSidebar, remember, lost, btnLogin } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useContext(ToastContext);
  const { setIsOpen } = useContext(SidebarContext);
  const { setUserId } = useContext(StoreContext);
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
        .required('Password is required!'),
      cfmpassword: Yup.string().oneOf(
        [Yup.ref('password'), null],
        'Password must match!'
      )
      // .required('Confirm Password is required!')
    }),
    onSubmit: async (values) => {
      if (isLoading) return;
      const { email: username, password } = values;
      setIsLoading(true);

      if (isRegister) {
        await register({ username, password })
          .then((res) => {
            toast.success(res.data.message);
            setIsLoading(false);
          })
          .catch((err) => {
            toast.error(err.response.data.message);
            setIsLoading(false);
          });
      }

      if (!isRegister) {
        await signIn({ username, password })
          .then((res) => {
            // console.log(res);
            setIsLoading(false);
            const { id, token, refreshToken } = res.data;
            setUserId(id);
            Cookies.set('token', token);
            Cookies.set('refreshToken', refreshToken);
            Cookies.set('userId', id);
            toast.success('Sign in successfully!');
            setIsOpen(false);
          })
          .catch((err) => {
            console.log(err);
            setIsLoading(false);
          });
      }
    }
  });

  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  return (
    <div className={container}>
      <div className={labelSidebar}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
      <form onSubmit={formik.handleSubmit}>
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
        {isRegister && (
          <InputCommon
            id='cfmpassword'
            label={'Confirm Password'}
            type={'password'}
            isRequired
            formik={formik}
          />
        )}
        {!isRegister && (
          <div className={remember}>
            <input type='checkbox' name='' id='' />
            <span>Remember me</span>
          </div>
        )}
        <div className={btnLogin}>
          <Button
            style={{ marginTop: '30px' }}
            content={
              isLoading ? 'LOADING...' : isRegister ? 'REGISTER' : 'LOGIN'
            }
            type='submit'
          />
          <Button
            type='button'
            content={
              isRegister ? 'Already have an account?' : "Dont' have an account?"
            }
            onClick={() => handleToggle()}
            isPrimary={false}
            style={{ marginTop: '10px' }}
          />
        </div>
      </form>
      {!isRegister && <p className={lost}>Lost your password?</p>}
    </div>
  );
}

export default Login;
