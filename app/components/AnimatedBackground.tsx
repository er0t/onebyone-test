'use client'

import React from 'react'
import styles from './AnimatedBackground.module.css'

const AnimatedBackground = () => {
  return (
    <div className={styles.background}>
      <svg 
        className={styles.waves} 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320" 
        preserveAspectRatio="none"
      >
        <defs>
          <path id="wave" d="M0,160 C320,300,420,300,740,160 C1060,20,1180,20,1440,160 C1720,300,1820,300,2140,160 C2460,20,2580,20,2880,160 V320 H0 Z" />
        </defs>
        <use xlinkHref="#wave" className={`${styles.wave} ${styles.wave1}`} />
        <use xlinkHref="#wave" className={`${styles.wave} ${styles.wave2}`} />
        <use xlinkHref="#wave" className={`${styles.wave} ${styles.wave3}`} />
      </svg>
    </div>
  )
}

export default AnimatedBackground