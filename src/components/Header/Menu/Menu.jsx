import React, { useContext } from 'react';
import styles from '../styles.module.scss';
import { SidebarContext } from '@/contexts/SidebarProvider';

function Menu({ content, href }) {
  const { menu } = styles;
  const { setIsOpen, setType } = useContext(SidebarContext);
  const handleClickShowLogin = () => {
    setIsOpen(true);
    setType('login');
  };
  return (
    <div className={menu} onClick={() => handleClickShowLogin()}>
      {content}
    </div>
  );
}

export default Menu;
