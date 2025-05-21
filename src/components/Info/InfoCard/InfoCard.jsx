import React from 'react';
import styles from '../styles.module.scss';
import truckIcon from '@icons/svgs/truckIcon.svg';

function InfoCard({content, desc, src}) {
  const { containerCard, title,des, containerContent } = styles;
  return (
    <div className={containerCard}>
      <img width={40} height={40} src={src} alt='TruckIcon' />
      <div className={containerContent}>
        <h2 className={title}>{content}</h2>
        <p className={des}>{desc}</p>
      </div>
    </div>
  );
}

export default InfoCard;
