import React from 'react'
import styles from '../style'
import { stats } from "../assets"

export const Innovative = () => {
  return (
    
    <section id="innovative" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative px-4   `}>
      <div className=' px-8'>
      <h2 className={`w-full  ${styles.heading2} text-center pb-4`} > 
      Innovative Technology 
      </h2>
      </div>
    <div className="w-full flex justify-center items-center 
        md:flex-row flex-col relative pb-5" >
      
      <img src={stats} alt="stats"  className=" sm:w-[70%] brightness-50 rounded-lg "/>
      
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
       p-4 text-center">
      
        <p className={`${styles.paragraph}  font-medium  xs:text-[22px] text-left xs:max-w-[580px] max-w-full  text-white`}>
        Our variety of know-how includes the complete series of digital also electric systems. 
        We prepare and develop adequately to ensure miraculous in efficiency, simpleness and safety and security.
        </p>

        {/* <p className={`${styles.paragraph} xs:hidden block font-medium text-[22px] text-left max-w-[580px]  text-white`}>
        Our variety of know-how includes the complete series of digital also electric systems. 
        We prepare and develop adequately to ensure miraculous in efficiency, simpleness and safety and security.
        </p> */}
      </div>
    </div>
    </section>

  )
}
