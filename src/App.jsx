import React from "react";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import EventListing from "./pages/EventListing";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout></MainLayout>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="/events" element={<EventListing></EventListing>}></Route>
      </Route>
    </Routes>
  );
}
