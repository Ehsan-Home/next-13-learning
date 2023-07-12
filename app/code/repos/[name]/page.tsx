import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";

const RepoPage = ({ params }: { params: { name: string } }) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Repo name={params.name} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
