import Link from "next/link";

interface RepoDirModel {
  type: string;
  path: string;
}

async function fetchContent(name: string) {
  const res = await fetch(
    `https://api.github.com/repos/Ehsan-Home/${name}/contents`
  );
  const contents = await res.json();
  return contents;
}

const RepoDirs = async ({ name }: { name: string }) => {
  const contents: RepoDirModel[] = await fetchContent(name);
  const dirs = contents.filter((content) => content.type === "dir");

  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
