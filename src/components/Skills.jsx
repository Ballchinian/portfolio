import { motion } from "framer-motion";
import { 
  sectionWrapper, 
  sectionTitle, 
  gridWrapper, 
  cardBase, 
  cardHover, 
  cardPaddingSmall, 
  cardText 
} from "../styles";

export default function Skills() {
  const skills = ["Python", "JavaScript", "SQL", "React", "Node.js", "Git"];

  return (
    <section id="skills" className={sectionWrapper}>
      <h2 className={sectionTitle}>Skills</h2>

      <div className={gridWrapper}>
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -100 : 100,
            }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            className={`
              ${cardBase}
              ${cardHover}
              ${cardPaddingSmall}
              ${cardText}
            `}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
