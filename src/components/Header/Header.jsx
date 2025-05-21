import React from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './BoxIcon/constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/LogoMenu.png';
import cartIcon from '@icons/svgs/cartIcon.svg';
import heartIcon from '@icons/svgs/heartIcon.svg';
import reloadIcon from '@icons/svgs/reloadIcon.svg';

function Header() {
  const { containerHeader, containerBoxIcon, containerMenu, containerBox, boxIconRight } =
    styles;
  return (
    <div className={containerHeader}>
      <div className={containerBox}>
        <div className={containerBoxIcon}>
          {dataBoxIcon &&
            dataBoxIcon.map((icon) => {
              return <BoxIcon type={icon.type} href={icon.href} />;
            })}
        </div>
        <div className={containerMenu}>
          {dataMenu &&
            dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
        </div>
      </div>
      <div>
        <img src={Logo} alt='' style={{ width: '153px', height: '53px' }} />
      </div>
      <div className={containerBox}>
        <div className={containerMenu}>
          {dataMenu &&
            dataMenu.slice(-3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
        </div>
        <div className={containerBoxIcon}>
          <img
            src={reloadIcon}
            className={boxIconRight}
            alt=''
          />
          <img
            src={heartIcon}
            className={boxIconRight}
            alt=''
          />
          <img
            src={cartIcon}
            className={boxIconRight}
            alt=''
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
