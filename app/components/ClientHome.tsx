'use client'

import React, { useEffect, useState } from 'react'
import WebFont from 'webfontloader'
import styles from './Home.module.css'
import AnimatedBackground from './AnimatedBackground'

const ClientHome = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  useEffect(() => {
    WebFont.load({
      custom: {
        families: ['Misto'],
        urls: ['/fonts/misto.css']
      },
      active: () => {
        setFontLoaded(true)
        console.log('Misto font has loaded.')
      },
      inactive: () => {
        console.log('Misto font failed to load.')
      }
    })
  }, [])

  return (
    <div className={styles.container}>
      <AnimatedBackground />
      <h1 
        className={`${styles.title} ${fontLoaded ? styles.mistoFont : ''}`}
        style={{ visibility: fontLoaded ? 'visible' : 'hidden' }}
      >
        ONEBYONE
      </h1>
    </div>
  )
}

export default ClientHome