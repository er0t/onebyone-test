'use client'

import React, { useState, useEffect } from 'react'
import styles from './AnimatedText.module.css'

interface AnimatedTextProps {
  text: string
  className?: string
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const [displayedText, setDisplayedText] = useState('')
  const letters = text.split('')

  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex < letters.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(intervalId)
      }
    }, 200) // Adjust this value to change the speed of animation

    return () => clearInterval(intervalId)
  }, [text, letters])

  return <span className={`${styles.animatedText} ${className || ''}`}>{displayedText}</span>
}

export default AnimatedText