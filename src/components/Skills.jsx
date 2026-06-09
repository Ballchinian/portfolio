import { motion } from "framer-motion";
import { 
    sectionWrapper, 
    sectionTitle, 
    gridWrapper, 
    cardBase, 
    cardHover, 
    cardPaddingSmall, 
    cardText,
    linkBaseInbetween
} from "../styles";
const achievements = [
    { desc: ["Top 10% on Codewars"], link: ["https://www.codewars.com/users/Ballchinian"] },
    { desc: ["Completed Codecademy Full-stack Engineer"], link: ["https://www.codecademy.com/profiles/JetFusion10/certificates/ffd0f42cce1a44e9a0108b365047a0a6"] },
    { desc: ["3 Years of coding experience"], link: ["https://github.com/Ballchinian?tab=overview&from=2026-06-01&to=2026-06-09"] },
    { desc: ["Higher diploma in mathematics"], link: [] }
  ];

export default function Skills() {
    const skills = [
        { name: "Python", link: "https://www.codecademy.com/profiles/JetFusion10/certificates/6c152bd262967f8c941c9707ed636bda" },
        { name: "JavaScript", link: "https://www.codecademy.com/profiles/JetFusion10/certificates/ffd0f42cce1a44e9a0108b365047a0a6" },
        { name: "PHP", link: "https://www.codecademy.com/profiles/JetFusion10/certificates/9b7bcc38d0ed49f593228763cbfd51e3" },
        { name: "jQuery", link: "https://www.codecademy.com/profiles/JetFusion10/certificates/0becf7c1cd2bd715f24331dddd23425a" },
        { name: "Bootstrap", link: "https://www.codecademy.com/profiles/JetFusion10/certificates/0595479d03627a8cb816b069000e4d06" },
        { name: "C#", link: "https://www.codecademy.com/profiles/JetFusion10/certificates/65f0ff88f4fc58e0536b3b51648dff24" },
        { name: "Java", link: "https://www.codecademy.com/profiles/JetFusion10/certificates/d3f89367b558583e361640f778191345" },
        { name: "SQL"},
    ];

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
                {skill.name && (
                <p>
                    {skill.name}
                </p>
                )}
                {skill.link && (
                <a href={skill.link} target="_blank" rel="noopener noreferrer" className={linkBaseInbetween}>
                    Certificate →
                </a>
                )}
                {skill.link === undefined && (
                <p className="text-gray-500 italic">
                    Project experience
                </p>
                )}
            </motion.div>
            ))}
        </div>
        </section>
    );
}
