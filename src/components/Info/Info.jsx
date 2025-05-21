import { dataInfo } from '@components/Info/constants';
import InfoCard from '@components/Info/InfoCard/InfoCard';
import MainLayout from '@components/Layout/Layout';
import React from 'react';
import styles from './styles.module.scss';

function Info() {
  const {container} = styles;
  return (
    <div>
      <MainLayout>
        <div className={container}>
            {dataInfo && dataInfo.map(item => {
                return <InfoCard content={item.title} desc={item.desc} src={item.src}/>
            })}
        </div>
      </MainLayout>
    </div>
  );
}

export default Info;
