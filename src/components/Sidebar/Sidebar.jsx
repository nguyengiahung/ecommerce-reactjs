import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { SidebarContext } from '@/contexts/SidebarProvider';
import classNames from 'classnames';
import { IoIosClose } from 'react-icons/io';
import Login from '@components/ContentSideBar/Login/Login';

function Sidebar() {
  const { container, overlay, sidebar, slideSideBar, btn_close } = styles;
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={container}>
      <div
        className={classNames({
          [overlay]: isOpen
        })}
        onClick={() => handleToggle()}
      />
      <div
        className={classNames(sidebar, {
          [slideSideBar]: isOpen
        })}
      >
        {isOpen && (
          <div className={btn_close} onClick={() => handleToggle()}>
            <IoIosClose />
          </div>
        )}
        <Login />
      </div>
    </div>
  );
}

export default Sidebar;
