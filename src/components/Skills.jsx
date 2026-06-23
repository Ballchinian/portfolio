import MotionCards from "./animations/motionCards";
import {
    sectionWrapper,
    sectionTitle,
    gridWrapper,
    linkBaseInbetween
} from "../styles";

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
                <MotionCards key={index} index={index}>
                    {skill.name && (
                        <p>{skill.name}</p>
                    )}
                    {skill.link && (
                        <a href={skill.link} target="_blank" rel="noopener noreferrer" className={linkBaseInbetween} aria-label={`View ${skill.name} certificate (opens in a new tab)`}>
                            Certificate →
                        </a>
                    )}
                    {skill.link === undefined && (
                        <p className="text-gray-500 italic">
                            Project experience
                        </p>
                    )}
                </MotionCards>
            ))}
        </div>
        </section>
    );
}
