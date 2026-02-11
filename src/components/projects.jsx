import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/dillionnorris/repos")
      .then(res => res.json())
      .then(data => {
        const sorted = data
          //.filter(repo => !repo.fork)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));
        setRepos(sorted);
      });
  }, []);

  return (
    <section>
      <h2>Projects</h2>

      <div className="projects">
        {repos.map(repo => (
          <div key={repo.id} className="project-card">
            <h3>{repo.name}</h3>
            <p>{repo.description}</p>
            <a href={repo.html_url} target="_blank">
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
