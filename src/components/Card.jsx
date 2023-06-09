import React from 'react'
import styles from '../style'
import {cardimage} from "../assets"

export const Card = () => {
  return (
    <img src={cardimage} alt="cardImage" className={`${styles.paddingY} pt-6 w-screen`} />
  )
}
