import React, { useContext, useState } from 'react';
import styles from './styles.module.scss';
import { IoIosClose } from 'react-icons/io';
import { deleteItemCart } from '@/apis/cartService';
import { SidebarContext } from '@/contexts/SidebarProvider';
import LoadingTextCommon from '@components/LoadingTextCommon/LoadingTextCommon';
import { ToastContext } from '@/contexts/ToastProvider';
function ItemProduct({
  src,
  name,
  sku,
  price,
  size,
  quantity,
  productId,
  userId
}) {
  const { container, boxContent, btnClose, overlayLoading } = styles;
  const [isDelete, setIsDelete] = useState(false);
  const { handleGetListProductsCart } = useContext(SidebarContext);
  const { toast } = useContext(ToastContext);
  const handleDeleteItem = () => {
    setIsDelete(true);
    deleteItemCart({ userId, productId })
      .then((res) => {
        setIsDelete(false);
        handleGetListProductsCart(userId, 'cart');
        toast.success('Delete item successfully!');
      })
      .catch((err) => {
        console.log(err);
        setIsDelete(false);
      });
  };
  return (
    <div className={container}>
      <img src={src} alt='' />
      <div className={boxContent}>
        <div>{name}</div>
        <div>Size: {size}</div>
        <div>
          {quantity} x ${price}
        </div>
        <div>SKU: {sku}</div>
      </div>
      <div className={btnClose}>
        <IoIosClose onClick={() => handleDeleteItem()} />
      </div>
      {isDelete && (
        <div className={overlayLoading}>
          <LoadingTextCommon />
        </div>
      )}
    </div>
  );
}

export default ItemProduct;
