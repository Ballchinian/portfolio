import { sectionBase, headingBase, cardBaseReverse, linkBase } from "../styles";
export default function Projects() {
    const projects = [
        {
            title: "Pathfinder 2e Battle Calculator",
            description:
                "A large scale project to simulate a p2e combat encounter. Character, action, and combat logic with a battle log.",
            link: "https://pathfindercalc.netlify.app/",
            codeLink: "https://github.com/Ballchinian/pathfinderCalculator",
        },
        {
            title: "League Matchmaker",
            description:
                "Refined matchmaking algorithm for LoL, internal mmr system with matchmaking logic with a clean interface",
            link: "https://lolmatchmaker.netlify.app",
            codeLink: "https://github.com/Ballchinian/LoLMatchMaker"
        },
        {
            title: "E-Commerce Website",
            description:
                "A shopping website inspired by the feel of Amazon, first attempt at a full-stack website ",
            link: "https://e-commercelive.netlify.app/login",
            codeLink: "https://github.com/Ballchinian/E-Commerce"
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

    ];

    return (
        <section id="projects" className={sectionBase}>
        <h3 className={headingBase}>Highlighted Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
                <div
                    key={i}
                    className={`${cardBaseReverse} min-h-[180px]`}
                >
                    <h4 className="text-xl font-bold mb-2">
                        {project.title}
                    </h4>

                    <p className="text-gray-300 mb-4">
                        {project.description}
                    </p>
                    
                    <div className="flex justify-between items-center mt-auto">
                        <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkBase}
                            aria-label={`View source code for ${project.title} on GitHub (opens in a new tab)`}
                        >
                            View Code →
                        </a>

                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkBase}
                                aria-label={`View the live ${project.title} project (opens in a new tab)`}
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
