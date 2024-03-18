import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import NotFound from "../components/NotFound";

export default function PageNotFound() {
  return (
    <div className="w-full h-[100vh]">
      <Header />
      <Navbar />
      <NotFound />
    </div>
  );
}
