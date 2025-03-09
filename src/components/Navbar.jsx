import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar  w-11/12 mx-auto ">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"events"}>Events</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
