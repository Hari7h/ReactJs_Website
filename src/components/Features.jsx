import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

export const Features = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative px-4 mx-8  `}>
    
    <div className="flex gap-5 flex-wrap sm: justify-center w-full feedback-container relative">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>

  </section>
);

