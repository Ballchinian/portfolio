import { sectionBase, headingBase, cardBaseReverse, linkBase } from "../styles";
import { Row, Col } from "react-bootstrap";

export default function Projects() {
    const projects = [
        {
            title: "Pathfinder 2e Battle Calculator",
            description:
                "A large scale project to simulate a p2e combat encounter. Character, action, and combat logic with a battle log.",
            link: "https://pathfindercalc.netlify.app/",
            codeLink: "https://github.com/Ballchinian/pathfinderCalculator"
        },
        {
            title: "League Matchmaker",
            description:
                "Refined matchmaking algorithm for LoL, internal mmr system with matchmaking logic with a clean interface",
            link: "https://lolmatchmaker.netlify.app",
            codeLink: "https://github.com/Ballchinian/LoLMatchMaker"
        },
        {
            title: "Reddit Client App",
            description:
                "A simple Reddit client app built with React and the Reddit API. Browse subreddits, view posts, and read comments.",
            link: "https://redditappfrontend.netlify.app/",
            codeLink: "https://github.com/Ballchinian/RedditApp"
        },
        {
            title: "Sudoku Solver",
            description:
                "Starts with a sudoku problem and methodically scans line for line, box for box, solving most sudoku problems.",
            codeLink: "https://github.com/Ballchinian/sudokuSolver"
        },
        {
            title: "Dijkstra’s Algorithm",
            description:
                "Implements Dijkstra’s algorithm to find the least weight path between nodes in a graph.",
            codeLink: "https://github.com/Ballchinian/dijkstra"
        },
        {
            title: "TicTokToe",
            description:
            "A simple tic-tac-toe game built in python... with a twist! Play against the computer.",
            codeLink: "https://github.com/Ballchinian/tiktoktoe"
        }
    ];

    return (
        <section id="projects" className={sectionBase}>
        <h3 className={headingBase}>Highlighted Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
            <div key={i} className={cardBaseReverse}>
                <h4
                className="
                    text-xl 
                    font-bold 
                    mb-2
                "
                >
                {project.title}
                </h4>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex justify-between items-center mt-auto">
                    <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkBase}
                    >
                        View Code →
                    </a>

                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkBase}
                    >
                        View Project →
                    </a>
                    )}
                </div>

            </div>
            ))}
        </div>
        </section>
    );
}
