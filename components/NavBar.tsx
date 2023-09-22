import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-600 text-white py-2">
      <div className="container mx-auto px-4 flex justify-end">
        <ul className="flex space-x-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">All Products</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
