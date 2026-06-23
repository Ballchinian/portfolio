import MotionCards from "./animations/motionCards";
import {
    sectionWrapper,
    sectionTitle,
    gridWrapper,
    linkBaseInbetween
} from "../styles";

export default function Achievements() {
    const achievements = [
        { desc: "Top 10% on Codewars", link: "https://www.codewars.com/users/Ballchinian" },
        { desc: "Completed Codecademy Full-stack Engineer", link: "https://www.codecademy.com/profiles/JetFusion10/certificates/ffd0f42cce1a44e9a0108b365047a0a6" },
        { desc: "3 Years of coding experience", link: "https://github.com/Ballchinian" },
        { desc: "Higher diploma in mathematics", link: null }
    ];

    return (
        <section id="achievements" className={sectionWrapper}>
        <h3 className={sectionTitle}>Achievements</h3>

        <div className={gridWrapper}>
            {achievements.map((achi, index) => (
                <MotionCards key={index} index={index}>
                    {achi.desc && (
                        <p>{achi.desc}</p>
                    )}
                    {achi.link && (
                        <a href={achi.link} target="_blank" rel="noopener noreferrer" className={linkBaseInbetween} aria-label={`View evidence for: ${achi.desc} (opens in a new tab)`}>
                        View →
                        </a>
                    )}
                </MotionCards>
            ))}
        </div>
        </section>
    );
}
