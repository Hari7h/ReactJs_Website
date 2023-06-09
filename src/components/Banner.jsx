import styles from '../style'
import {banner}  from '../assets'


export const Banner = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}  `} >
      <div className={`flex-1 
      flex-col xl:px-0 sm:px-16 px-6 `}>
        <div className='flex flex-row justify-between  px-10
        items-center w-full'>
          <h1 className=' flex-1 font-ibm font-semibold 
         text-[42px] md:text-6xl text-slate-800 md:pt-6'> Introducing <br className='sm:block '/>
          <span className='text-gradient'> BOMBAY  <br />
            INTERACTIVE</span>
            </h1>
           
        </div>
        <p className={` sm:hi ${styles.paragraph} max-w-full my-8 px-8`}> We are a team of like-minded and determined individuals, all sharing a vision for success.
             We believe that our sophisticated technology has the potential to become an industry sensation. </p>
      </div > 

      <div>
        <img src={banner} alt="banner"
        className={`w-[90%] h-[80%] relative pt-0  banner-animate `} />
      </div>
      
    </section>
    
    
  )
}
