import Repo from "@/app/components/Repo";

const RepoPage = ({ params }: { params: { name: string } }) => {
  return (
    <div className="card">
      <Repo name={params.name} />
    </div>
  );
};

export default RepoPage;
