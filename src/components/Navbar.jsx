import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full bg-[#DBEBFF]">
      <div className="navbar  w-11/12 mx-auto ">
        <div className="flex-1 flex items-center gap-1">
          <img src={logo} className="w-8" alt="" />
          <h2 className="text-2xl font-bold text-blue-700">CommunionHub</h2>
        </div>
        <div className="flex-none">
          <ul className="flex gap-6 px-1">
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-700" : "")}
                to={"/"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "text-blue-700" : "")}
                to={"events"}
              >
                Events
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
