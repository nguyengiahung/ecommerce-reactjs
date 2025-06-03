import Header from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import React, { useContext } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@/pages/OurShop/components/Banner';
import { OurShopProvider} from '@/contexts/OurShopProvider';
import Filter from '@/pages/OurShop/components/Filter';

function OurShop() {
  const { container, functionBox, btnBack, specialText } = styles;
  const navigate = useNavigate();
  const handleBackNavigate = () => {
    navigate(-1);
  };

  //! khi log ra a sẽ ko đc vì chỉ có những thằng con chilđ trong OurShopProvider mới đc sử dụng giá trị mà thằng provider truyền xuống, file OurShop.jsx này nằm cùng cấp nên ko truyền đc data vào, nếu truyền vào <banner> ở dưới thì sẽ đc
  // const a = useContext(OurShopContext);
  // console.log(a);
  return (
    <OurShopProvider>
      <Header />
      <MainLayout>
        <div className={container}>
          <div className={functionBox}>
            <div>
              Home &gt; <span className={specialText}>Shop</span>
            </div>
            <div onClick={() => handleBackNavigate()} className={btnBack}>
              &lt; Return to previous page
            </div>
          </div>
        </div>
        <Banner />
        <div>
          <Filter />
        </div>
      </MainLayout>
    </OurShopProvider>
  );
}

export default OurShop;
