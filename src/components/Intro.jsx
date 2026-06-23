import { buttonBase } from "../styles";

export default function Intro() {
    return (
        <section
            className="
            h-screen 
            flex 
            flex-col 
            justify-center 
            items-center 
            text-center 
            px-6
            "
        >
        <h1
            className="
            text-5xl 
            font-extrabold 
            mb-4
            "
        >
            Hi, I'm Ethan <span aria-hidden="true">👋</span>
        </h1>
        <p
            className="
            text-lg
            text-gray-300
            mb-2
            "
        >
            Software Engineer | Web Developer | Problem Solver
        </p>
        <p
            className="
            text-base
            text-gray-400
            max-w-xl
            mb-6
            "
        >
            I build full-stack web apps and algorithmic tools. From
            matchmaking systems to combat simulators.
        </p>
        <a href="#projects" className={buttonBase + " rounded-xl"}>
            View My Work
        </a>
        
        </section>
    );
}
