import React from "react"
import styles from "../style"
import { Banner, Business,  Innovative,  Card, Clients,  Features, 
    Footer, Navbar, Pricing, QnA,  } from "../components"

export const Home = () =>{
    return(
      <div className="bg-primary w-full overflow-hidden">
        
        <div className={`bg-primary ${styles.flexStart} `}>
          <div className={`${styles.boxWidth}`}> 
            <Banner />
          </div>
        </div>  
    
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
         <div className={`${styles.boxWidth}`}>
            <Business/>
          </div>
        </div> 
    
        <div className={`bg-primary ${styles.flexStart} py-10`}>
         <Card />
        </div> 
    
        <div className={`bg-gradient-to-r from-cyan-400 to-blue-400 ${styles.flexStart} my-10`}  >
         <div className={`${styles.boxWidth} ${styles.paddingX}`}>
            <Innovative />
          </div>
        </div>
    
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} py-10`}>
         <div className={`${styles.boxWidth}`}>
            <Features />
        
          </div> 
         </div>
    
        {/* <div className={` bg-gradient-to-r from-cyan-400 to-blue-400 ${styles.flexStart}  py-10`}  >
         <div className={`${styles.boxWidth} py-16`}>
            <Clients />
          </div>
        </div>  */}
    
       
    
        {/* <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} ${styles.paddingY} py-10`}>
         <div className={`${styles.boxWidth}`}>
            <Footer />
        
          </div> 
         </div>  */}
      </div>
    )
}