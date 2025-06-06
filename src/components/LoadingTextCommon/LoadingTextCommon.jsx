import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styles from './styles.module.scss';

function LoadingTextCommon() {
  const { loading } = styles;
  return <AiOutlineLoading3Quarters className={loading} />;
}

export default LoadingTextCommon;
