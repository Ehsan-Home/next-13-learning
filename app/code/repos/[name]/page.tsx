const RepoPage = ({ params }: { params: { name: string } }) => {
  return (
    <div className="card">
      <h2>{params.name}</h2>
    </div>
  );
};

export default RepoPage;
