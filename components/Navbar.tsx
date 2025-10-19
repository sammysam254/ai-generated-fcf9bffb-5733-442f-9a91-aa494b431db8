import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-5 shadow-lg">
      <ul className="flex justify-between">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;