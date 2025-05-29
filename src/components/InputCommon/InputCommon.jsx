import React, { useState } from 'react';
import styles from './styles.module.scss';
import { LiaEyeSolid, LiaEyeSlash } from 'react-icons/lia';

function InputCommon({ label, type, isRequired = false, ...props }) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { container, labelInput, boxInput, Input, boxIcon, errMsg } = styles;
  const { formik, id } = props;
  const isPassword = type === 'password';
  const isShowTextPassword =
    type === 'password' && isShowPassword ? 'text' : type;
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const isErr = formik.errors[id] && formik.touched[id];
  const messageErr = formik.errors[id];

  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input
          className={Input}
          type={isShowTextPassword}
          {...props}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
        />
        {isPassword && (
          <div className={boxIcon} onClick={() => handleShowPassword()}>
            {isShowPassword ? <LiaEyeSlash /> : <LiaEyeSolid />}
          </div>
        )}
        {isErr && <div className={errMsg}>{messageErr}</div>}
      </div>
    </div>
  );
}

export default InputCommon;
