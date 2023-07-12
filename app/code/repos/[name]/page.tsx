import Repo from "@/app/components/Repo";
import Link from "next/link";

const RepoPage = ({ params }: { params: { name: string } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to Repositories
      </Link>
      <Repo name={params.name} />
    </div>
  );
};

export default RepoPage;
