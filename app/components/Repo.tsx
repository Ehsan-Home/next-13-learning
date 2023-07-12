import { FaCodeBranch, FaEye, FaStar } from "react-icons/fa";
import { RepoModel } from "../code/repos/page";

async function fetchRepo(name: string) {
  const res = await fetch(`https://api.github.com/repos/Ehsan-Home/${name}`);
  const repo = await res.json();
  return repo;
}

const Repo = async ({ name }: { name: string }) => {
  const repo: RepoModel = await fetchRepo(name);
  console.log({ repo });

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
