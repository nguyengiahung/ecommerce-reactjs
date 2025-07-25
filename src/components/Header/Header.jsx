import React, { useContext, useEffect, useState } from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './BoxIcon/constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/LogoMenu.png';
import useScrollHanding from '@/hooks/useScrollHanding';
import classNames from 'classnames';
import { SidebarContext } from '@/contexts/SidebarProvider';
import { CiHeart, CiShoppingCart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '@/contexts/storeProvider';
function Header() {
  const {
    containerHeader,
    containerBoxIcon,
    containerMenu,
    containerBox,
    IconRight,
    containerFixed,
    container,
    topHeader,
    boxCart,
    quantity
  } = styles;
  const { scrollPosition, scrollDirection } = useScrollHanding();
  const [fixedPosition, setFixedPosition] = useState(false);
  const {userInfo} = useContext(StoreContext);
  const {
    setIsOpen,
    setType,
    listProductCart,
    handleGetListProductsCart,
    userId
  } = useContext(SidebarContext);
  const navigate = useNavigate();

  useEffect(() => {
    setFixedPosition(scrollPosition > 82);
  }, [scrollPosition]);

  const handleOpenSidebar = (type) => {
    setIsOpen(true);
    setType(type);
  };

  const totalItemCart = listProductCart.length
    ? listProductCart.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0)
    : 0;

  const handleOpenCartSidebar = () => {
    handleGetListProductsCart(userId, 'cart');
    handleOpenSidebar('cart');
  };

  return (
    <div
      className={classNames(container, topHeader, {
        [containerFixed]: fixedPosition
      })}
    >
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
        <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
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
            <div>
              <TfiReload
                style={{ fontSize: '20px' }}
                onClick={() => handleOpenSidebar('compare')}
                className={IconRight}
              />
            </div>
            <div>
              <CiHeart
                onClick={() => handleOpenSidebar('wistList')}
                className={IconRight}
              />
            </div>
            <div className={boxCart}>
              <CiShoppingCart
                onClick={() => handleOpenCartSidebar()}
                className={IconRight}
              />
              <span className={quantity}>{totalItemCart || userInfo?.amountCart}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
