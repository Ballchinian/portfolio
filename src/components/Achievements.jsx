import { motion } from "framer-motion";

import { 
    sectionWrapper, 
    sectionTitle, 
    gridWrapper, 
    cardBase, 
    cardHover, 
    cardPaddingLarge ,
    linkBaseInbetween
} from "../styles";

export default function Achievements() {
    const achievements = [
        { desc: "Top 10% on Codewars", link: "https://www.codewars.com/users/Ballchinian" },
        { desc: "Completed Codecademy Full-stack Engineer", link: "https://www.codecademy.com/profiles/JetFusion10/certificates/ffd0f42cce1a44e9a0108b365047a0a6" },
        { desc: "3 Years of coding experience", link: "https://github.com/Ballchinian" },
        { desc: "Higher diploma in mathematics", link: "#" }
    ];

    return (
        <section id="achievements" className={sectionWrapper}>
        <h3 className={sectionTitle}>Achievements</h3>

        <div className={gridWrapper}>
            {achievements.map((achi, index) => (
            <motion.div
                key={index}
                initial={{ 
                opacity: 0, 
                x: index % 2 === 0 ? -100 : 100 // alternate left/right
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div
                className={`
                    ${cardBase}
                    ${cardHover}
                    ${cardPaddingLarge}
                `}
                >
                {achi.desc && (
                    <p key={index}>
                    {achi.desc}
                    </p>
                )}
                {achi.link && (
                    <a
                    href={achi.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkBaseInbetween}
                    >
                    View →
                    </a>
                )}
                </div>
            </motion.div>
            ))}
        </div>
        </section>
    );
}
