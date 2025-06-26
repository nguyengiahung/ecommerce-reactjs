import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { CiShoppingCart } from 'react-icons/ci';
import ItemProduct from '@components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';
import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { SidebarContext } from '@/contexts/SidebarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const {
    container,
    boxContent,
    boxBtn,
    boxPrice,
    containerListProductCart,
    btnReturn,
    containerEmpty
  } = styles;
  const { listProductCart, isLoading, setIsOpen } = useContext(SidebarContext);
  const navigate = useNavigate();
  const handleNavigateToShop = () => {
    navigate('/shop');
    setIsOpen(false);
  };

  const handleViewCart = () => {
    setIsOpen(false);
    navigate('/cart');
  };

  const subTotal = listProductCart.reduce((acc, item) => {
    return acc + item.total;
  }, 0);
  return (
    <div className={container}>
      <div className={boxContent}>
        <HeaderSideBar icon={<CiShoppingCart />} title={'CART'} />
        {listProductCart.length === 0 ? (
          <div className={containerEmpty}>
            <div>No products in the cart.</div>
            <Button
              onClick={handleNavigateToShop}
              content={'RETURN TO SHOP'}
              isPrimary={false}
              style={{ width: '180px' }}
            />
          </div>
        ) : (
          <div
            className={containerListProductCart}
            style={{ height: 'calc(100vh - 250px)', overflow: 'auto' }}
          >
            {isLoading ? (
              <LoadingTextCommon />
            ) : (
              listProductCart.map((item, index) => {
                return (
                  <ItemProduct
                    key={index}
                    src={item.images[0]}
                    name={item.name}
                    sku={item.sku}
                    price={item.price}
                    size={item.size}
                    quantity={item.quantity}
                    productId={item.productId}
                    userId={item.userId}
                  />
                );
              })
            )}
          </div>
        )}
      </div>
      {listProductCart.length === 0 ? (
        ''
      ) : (
        <div>
          <div className={boxPrice}>
            <p>SUBTOTAL:</p>
            <p>${subTotal}</p>
          </div>
          <div className={boxBtn}>
            <Button onClick={() => handleViewCart()} content={'VIEW CART'} />
            <Button content={'CHECKOUT'} isPrimary={false} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
