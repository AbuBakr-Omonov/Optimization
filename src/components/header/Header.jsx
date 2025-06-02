import React from "react";
import { NavLink } from "react-router-dom";

function Header() {

  return (
    <header className="bg-gray-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-white text-2xl font-bold">My App</h1>
        <div className="space-x-4">
          <NavLink to="/user" className={"navLinkStyle text-white px-4 py-2 hover:text-gray-400 transition duration-200"}>
            User
          </NavLink>
          <NavLink to="/product" className={"navLinkStyle text-white px-4 py-2 hover:text-gray-400 transition duration-200"}>
            Product
          </NavLink>
          <NavLink to="/wishlist" className={"navLinkStyle text-white px-4 py-2 hover:text-gray-400 transition duration-200"}>
            wishlist
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default React.memo(Header);