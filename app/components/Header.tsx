import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Ehsan Ghasaei</Link>
        </div>
        <div className="links">
          <Link href="/about">About</Link>
          <Link href="/about/team">Our team</Link>
          <Link href="/code/repos">About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
