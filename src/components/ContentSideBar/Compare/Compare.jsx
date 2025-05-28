import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import React from 'react';
import { TfiReload } from 'react-icons/tfi';
import styles from './style.module.scss';
import ItemProduct from '@components/ItemProduct/ItemProduct';

function Compare() {
  const {container} = styles;
  return (
    <div className={container}>
      <HeaderSideBar icon={<TfiReload />} title={'COMPARE'}/>
      <ItemProduct />
    </div>
  );
}

export default Compare;
