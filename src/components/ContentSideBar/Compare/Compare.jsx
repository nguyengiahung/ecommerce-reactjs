import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import React from 'react';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '@components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

function Compare() {
  const {container, boxContent, boxBtn} = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar icon={<TfiReload />} title={'COMPARE'}/>
      <ItemProduct />
      </div>
      <div className={boxBtn}>
        <Button content={'VIEW COMPARE'}/>
      </div>
    </div>
  );
}

export default Compare;
