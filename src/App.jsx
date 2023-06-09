import React from "react"
import styles from "./style"
import {  Banner, Business,  Innovative,  Card, Clients,  Features, 
  Footer, Navbar, Pricing, QnA,  } from "./components"
import { About,Home, Feature,Support,Notfound } from "./pages";
import { Routes, Route, BrowserRouter } from "react-router-dom";




export const App = () => {
  return(
   <div>
   <BrowserRouter >
   <div className="bg-primary w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}> 
             <Navbar />
          </div>
        </div>
     </div>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='feature' element={<Feature/>}/>
      <Route path='support' element={<Support/>}/>
      <Route path='*' element={<Notfound/>}/>


    </Routes>
   </BrowserRouter>

     <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} ${styles.paddingY} py-10`}>
         <div className={`${styles.boxWidth}`}>
            <Footer />
        
          </div> 
         </div> 
 </div>
  )
};

