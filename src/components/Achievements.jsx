import { motion } from "framer-motion";
import { 
  sectionWrapper, 
  sectionTitle, 
  gridWrapper, 
  cardBase, 
  cardHover, 
  cardPaddingLarge 
} from "../styles";

export default function Achievements() {
  const achievements = [
    "Top 10% on Codewars",
    "2 Years of coding experience",
    "Completed Codecademy Full-stack Engineer",
    "Higher diploma in mathematics",
    "Top 10% grades in college",
    "Self taught"
  ];

  return (
    <section id="achievements" className={sectionWrapper}>
      <h3 className={sectionTitle}>Achievements</h3>

      <div className={gridWrapper}>
        {achievements.map((a, i) => (
          <motion.div
            key={i}
            initial={{ 
              opacity: 0, 
              x: i % 2 === 0 ? -100 : 100 // alternate left/right
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div
              className={`
                ${cardBase}
                ${cardHover}
                ${cardPaddingLarge}
              `}
            >
              {a}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
