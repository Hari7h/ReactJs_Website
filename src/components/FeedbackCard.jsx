import styles from "../style";

const FeedbackCard = ({ content,  img }) => (
  <div className={`flex ${styles.flexCenter} flex-col px-10 py-14 rounded-[20px] 
   max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-12 feedback-card `}>
    <img src={img} alt={img} className="w[80%] h-[80%] rounded-full justify-center items-center" />
    <div>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-slate-800 my-10">
      {content}
    </p>
    </div>
    
  </div>
);

export default FeedbackCard;