import React from 'react';
import styles from '../styles.module.scss';

function SelectBox({ options, getValue, type,defaultValue }) {
  const { selectBox } = styles;
  return (
    <select
      name=''
      id=''
      value={defaultValue}
      onChange={(e) => getValue(e.target.value, type)}
      className={selectBox}
    >
      {options &&
        options.map((option) => {
          return <option value={option.value}>{option.label}</option>;
        })}
    </select> 
  );
}

export default SelectBox;
