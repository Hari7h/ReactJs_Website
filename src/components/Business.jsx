import { features } from '../constants'
import { Button } from './Button'
import styles, { layout } from '../style'

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[68px] h-[68px] rounded-full ${styles.flexCenter} bg-gray-200`}>
      <img src={icon} alt="star" className="w-[60%] h-[60%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-slate-800 text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimSlate text-[16px] leading-[24px] mb-1" >
        {content}
      </p>
    </div>
   
  </div>
);

export const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={`{layout.sectionInfo}  px-4 mx-8 border-r border-r-slate-300 `} >
        <h2 className={styles.heading2}  >
          About Us
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-4 `}>
          With our innovative and insightful technology, we strive to enhance 
          our users every day experiences. <br className='sm:block hidden'/>
           Our incredible team of engineers, programmers,
           designers and marketing experts have worked tirelessly to
           bring Bombay Interactive to the forefront of the industry.</p>

          <Button styles="mt-10"/> 
      </div>
    
      <div className={`${layout.sectionImg} flex-col`}>
     {features.map((feature, index) => (
     <FeatureCard key={feature.id} {...feature} index={index} />
     ))}
    </div>
    </section>
  )
}
