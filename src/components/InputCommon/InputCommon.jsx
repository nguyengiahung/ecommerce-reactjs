import React, { useState } from 'react';
import styles from './style.module.scss';
import { LiaEyeSolid, LiaEyeSlash } from 'react-icons/lia';
import Button from '@components/Button/Button';
function InputCommon({ label, type, isRequired = false }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { container, labelInput, boxInput, Input, boxIcon } = styles;
  const isPassword = type === 'password';
  const isShowTextPassword = type === 'password' && isShowPassword ? 'text' : type;
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          className={Input}
          type={isShowTextPassword}
          name=''
          id=''
        />
        {isPassword && (
          <div className={boxIcon} onClick={() => handleShowPassword()}>
            {isShowPassword ? <LiaEyeSlash /> : <LiaEyeSolid />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
