import { motion } from "framer-motion";
import { cardBase, cardHover, cardPaddingLarge } from "../../styles";
export default function MotionCards({index, children}: {index: number; children: React.ReactNode}) {

    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`${cardBase} ${cardHover} ${cardPaddingLarge}`}
        >
            {children}
        </motion.div>
)}