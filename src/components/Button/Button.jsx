import React from 'react'
import styles from './styles.module.scss';

function Button() {
  return (
    <div>
        <button className={styles.btn}>M</button>
        <button className={styles.btn2}>X</button>
    </div>
  )
}

export default Button