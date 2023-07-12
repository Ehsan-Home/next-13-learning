import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to Traversy Media</h1>

      <div>
        <Link href="/">Home</Link>
      </div>

      <div>
        <Link href="/about">About</Link>
      </div>

      <div>
        <Link href="/about/team">Team</Link>
      </div>
    </>
  );
};

export default HomePage;
