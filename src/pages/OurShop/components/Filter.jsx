import React, { useContext } from 'react';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { CiCircleList } from 'react-icons/ci';
import styles from '../styles.module.scss';
import { OurShopContext } from '@/contexts/OurShopProvider';
import SelectBox from '@/pages/OurShop/components/SelectBox';

function Filter() {
  const { containerFilter, containerSort, containerShow, selectBox } = styles;
  const { sortOptions, showOptions, setSortId, setShowId, setIsShowGrid } =
    useContext(OurShopContext);

  const getValueSelect = (value, type) => {
    if (type === 'sort') {
      setSortId(value);
    } else {
      setShowId(value);
    }
  };

  const handleGetShowGrid = (type) => {
    setIsShowGrid(type === 'grid');
  };

  return (
    <div className={containerFilter}>
      <div className={containerSort}>
        <SelectBox
          options={sortOptions}
          getValue={getValueSelect}
          type='sort'
        />

        <BsGrid3X3Gap
          style={{ fontSize: '20px', cursor: 'pointer' }}
          onClick={() => handleGetShowGrid('grid')}
        />
        <div
          style={{ height: '20px', width: '2px', backgroundColor: '#ccc' }}
        ></div>
        <CiCircleList
          style={{ fontSize: '25px', cursor: 'pointer' }}
          onClick={() => handleGetShowGrid('list')}
        />
      </div>
      <div className={containerShow}>
        <span>Show</span>
        <SelectBox
          options={showOptions}
          getValue={getValueSelect}
          type='show'
        />
      </div>
    </div>
  );
}

export default Filter;
