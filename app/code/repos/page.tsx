import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

export interface RepoModel {
  name: string;
  id: number;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

async function fetchRepos() {
  const res = await fetch("https://api.github.com/users/Ehsan-Home/repos");
  const data = await res.json();
  return data;
}

const ReposPage = async () => {
  const repos: RepoModel[] = await fetchRepos();
  return (
    <div className="repos-container">
      <h2>Repositories</h2>
      <ul className="repo-list">
        {repos.map((repo) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className="repo-details">
                <span>
                  <FaStar />
                  {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span>
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
