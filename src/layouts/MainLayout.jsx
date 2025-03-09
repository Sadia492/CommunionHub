import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}
