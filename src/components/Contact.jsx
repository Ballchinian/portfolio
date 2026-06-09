import { sectionBase, headingBase, paragraphBase, buttonBase } from "../styles";

export default function Contact() {
    return (
        <section id="contact" className={sectionBase + " text-center"}>
        <h3 className={headingBase}>Get In Touch</h3>
        <p className={paragraphBase + " mb-6"}>
            If this profile has caught your attention and you think I could be a good fit for your team, please don't hesitate to reach out. I'm always open to discussing new opportunities and collaborations.
        </p>
        <p>Email: <a href="mailto:ethantnewiss@hotmail.co.uk" className="underline">ethantnewiss@hotmail.co.uk</a></p>
        <p>Phone: <a href="tel:+447397651227" className="underline">+44 7397 651227</a></p>
        </section>
    );
}
