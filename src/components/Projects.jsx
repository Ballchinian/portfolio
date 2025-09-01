import { sectionBase, headingBase, cardBase, linkBase } from "../styles";

export default function Projects() {
  const projects = [
    {
      title: "Pathfinder 2e Battle Calculator",
      description:
        "A small tool for Pathfinder players to quickly work out combat modifiers. Made with plain HTML, CSS and JavaScript.",
      link: "https://github.com/Ballchinian/dndCalc",
    },
    {
      title: "TikTokToe",
      description:
        "This TikTokToe Variant allows for a board game size of 3 or above. The win condition is having more than 3 connections than your opponent! Watch out for diagonals! Good Luck",
      link: "https://github.com/Ballchinian/tiktoktoe",
    },
    {
      title: "Sudoku Solver",
      description:
        "Starts with a sudoku problem and methodically scans line for line, box for box, solving most sudoku problems.",
      link: "https://github.com/Ballchinian/sudokuSolver",
    },
    {
      title: "Dijkstra’s Algorithm",
      description:
        "Implements Dijkstra’s algorithm to find the least weight path between nodes in a graph.",
      link: "https://github.com/Ballchinian/dijkstra",
    },
    {
      title: "Python 101",
      description:
        "Auto sorter, maze solver, high-end tracker and polyculture optimiser packaged neatly in Python.",
      link: "https://github.com/Ballchinian/theFarmerWasReplaced",
    },
    {
      title: "Reddit Client App",
      description:
        "A simple Reddit client app built with React and the Reddit API. Browse subreddits, view posts, and read comments.",
      link: "https://github.com/Ballchinian/RedditApp",
    },
    {
      title: "E-Commerce Website",
      description:
        "A basic e-commerce site built with React, Node.js, and Express. My attempt at a secure, fully functional web app.",
      link: "https://github.com/Ballchinian/E-Commerce",
    },
  ];

  return (
    <section id="projects" className={sectionBase}>
      <h3 className={headingBase}>Projects</h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className={cardBase}>
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
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={linkBase}
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
