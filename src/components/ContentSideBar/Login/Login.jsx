import InputCommon from '@components/InputCommon/InputCommon';
import React, { useState } from 'react';
import styles from './style.module.scss';
import Button from '@components/Button/Button';

function Login() {
  const { container, labelSidebar, remember, lost, btnLogin } = styles;

  return (
    <div className={container}>
      <div className={labelSidebar}>SIGN IN</div>
      <InputCommon label={'Username or email'} type={'text'} isRequired />
      <InputCommon label={'Password'} type={'password'} isRequired />
      <div className={remember}>
        <input type='checkbox' name='' id='' />
        <span>Remember me</span>
      </div>
      <div className={btnLogin}>
        <Button content={'LOGIN'} />
      </div>
      <p className={lost}>Lost your password?</p>
    </div>
  );
}

export default Login;
