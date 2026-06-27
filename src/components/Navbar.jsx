import { useState } from "react";
import { buttonBase } from "../styles";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const menuItems = ["About", "Skills", "Projects", "Achievements", "Contact"];

    return (
        <nav className="bg-[#1b263b] fixed w-full top-0 z-50" aria-label="Main navigation">
            <div className="max-w-7xl mx-auto px-5 py-2 flex justify-between items-center">
                <a className="text-xl font-bold text-white" href="#">
                Ethan Newiss
                </a>

                {/* Mobile Toggle */}
                <button
                    className="text-white md:hidden focus:outline-none"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={open}
                >
                {open ? "✕" : "☰"}
                </button>

                {/* Menu Items */}
                <ul
                className={`
                    md:flex md:items-center md:gap-6
                    absolute md:static top-full left-0 w-full md:w-auto
                    bg-[#1b263b] md:bg-transparent
                    transition-all duration-300
                    ${open ? "block" : "hidden"}
                `}
                >
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="text-white text-lg text-center md:text-left py-3 md:py-0"
                    >
                    <a
                        href={`#${item.toLowerCase()}`}
                        className="hover:text-cyan-400 transition-colors"
                        onClick={() => setOpen(false)} // close menu on mobile click
                    >
                        {item}
                    </a>
                    </li>
                ))}
                </ul>

                <a
                    href="https://docs.google.com/document/d/1CQp5CApyHOTp70NrTtgSeIAvOunVLe-k_ZdpfKZP-qo/edit?tab=t.0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonBase} `}
                    onClick={() => setOpen(false)}
                    aria-label="View Ethan's CV (opens in a new tab)"
                >
                    CV
                </a>
            </div>
        </nav>
    );
}
