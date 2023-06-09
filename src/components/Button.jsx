import React from 'react'

export const Button = ({styles}) => {
  return (
    
    <button type='button' className={`py-4 px-6 
    bg-black-gradient font-ibm font-medium text-[15px] text-primary outline-none
    ${styles}`}> Get started</button>
  )
}
