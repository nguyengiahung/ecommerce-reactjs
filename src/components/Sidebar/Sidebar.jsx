import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { SidebarContext } from '@/contexts/SidebarProvider';
import classNames from 'classnames';
import { IoIosClose } from 'react-icons/io';
import Login from '@components/ContentSideBar/Login/Login';
import Cart from '@components/ContentSideBar/Cart/Cart';
import WistList from '@components/ContentSideBar/WistList/WistList';
import Compare from '@components/ContentSideBar/Compare/Compare';
import DetailProduct from '@components/ContentSideBar/DetailProduct/DetailProduct';

function Sidebar() {
  const { container, overlay, sidebar, slideSideBar, btn_close } = styles;
  const { isOpen, setIsOpen, type } = useContext(SidebarContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRenderContent = () => {
    switch (type) {
      case 'login':
        return <Login />;
      case 'compare':
        return <Compare />;
      case 'wistList':
        return <WistList />;
      case 'cart':
        return <Cart />;
      case 'detail':
        return <DetailProduct />;
      default:
        return <Login />;
    }
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
        {handleRenderContent()}
      </div>
    </div>
  );
}

export default Sidebar;
