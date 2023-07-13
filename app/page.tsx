import Link from "next/link";
import Repo from "@/app/components/Repo";
import Courses from "./components/Courses";

const HomePage = () => {
  return (
    <>
      <h1>Welcome to Traversey Media</h1>
      <Courses />
    </>
  );
};

export default HomePage;
