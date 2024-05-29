import Link from 'next/link';
import { FC } from 'react';

const Navbar: FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link href="/" passHref>
            <p className="hover:text-gray-200 transition duration-300">My-Blog</p>
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" passHref>
              <p className="text-white hover:text-gray-200 transition duration-300">Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <p className="text-white hover:text-gray-200 transition duration-300">About</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;