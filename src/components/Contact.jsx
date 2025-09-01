import { sectionBase, headingBase, paragraphBase, buttonBase } from "../styles";

export default function Contact() {
  return (
    <section id="contact" className={sectionBase + " text-center"}>
      <h3 className={headingBase}>Get In Touch</h3>
      <p className={paragraphBase + " mb-6"}>
        Interested in working together? Let’s connect.
      </p>
      <a href="mailto:youremail@example.com" className={buttonBase}>
        Contact Me
      </a>
    </section>
  );
}
