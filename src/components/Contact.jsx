import { sectionBase, headingBase, paragraphBase, buttonBase } from "../styles";

export default function Contact() {
  return (
    <section id="contact" className={sectionBase + " text-center"}>
      <h3 className={headingBase}>Get In Touch</h3>
      <p className={paragraphBase + " mb-6"}>
        Interested in working together? Let’s connect.
      </p>
      <p>Email: <a href="mailto:ethantnewiss@hotmail.co.uk" className="underline">ethantnewiss@hotmail.co.uk</a></p>
      <p>Phone: <a href="tel:+447397651227" className="underline">+44 7397 651227</a></p>
    </section>
  );
}
