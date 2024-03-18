import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="w-full my-4 max-w-6xl mx-auto">
      <div className="w-full">
        <ul className="flex justify-center items-center flex-wrap w-full sm:py-4 box-border">
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/" className="active:border-red-500 active:text-red-500">HOME</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/18-plus" className="active:border-red-500 active:text-red-500">Adult 18+</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/18-plus-300" className="active:border-red-500 active:text-red-500">Adult 18+ 300Mb</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/bollywood-300" className="active:border-red-500 active:text-red-500">Bollywood 300Mb</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/bollywood-720" className="active:border-red-500 active:text-red-500">Bollywood 720p</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/dual-audio-300" className="active:border-red-500 active:text-red-500">Dual Audio 300mb</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/dual-audio-720" className="active:border-red-500 active:text-red-500">Dual Audio 720p</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/punjabi-movies" className="active:border-red-500 active:text-red-500">Punjabi Movies</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/south-hindi-dubbed-300" className="active:border-red-500 active:text-red-500">South Hindi Dubbed 300Mb</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/south-hindi-dubbed-720" className="active:border-red-500 active:text-red-500">South Hindi Dubbed 720p</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/hollywood-movies-300" className="active:border-red-500 active:text-red-500">Hollywood Movies 300Mb</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/hollywood-movies-720" className="active:border-red-500 active:text-red-500">Hollywood Movies 720p</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/telugu-movies-300" className="active:border-red-500 active:text-red-500">Telugu 300Mb</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/telugu-movies-300" className="active:border-red-500 active:text-red-500">Telugu 720p</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/tv-shows" className="active:border-red-500 active:text-red-500">TV Shows</NavLink>
          </li>
          <li className="border border-blue-400 shadow sm:shadow-md text-blue-500 inline-block py-1 px-2 sm:py-2 sm:px-4 m-1 transition-transform hover:scale-95">
            <NavLink to="/category/web-series" className="active:border-red-500 active:text-red-500">WEB Series</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
