import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoSearchSharp } from "react-icons/io5";
import logo from "../assets/logo.png";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function Header() {
  const [toggle, setToggle] = useState(true);
  const [findMovie, setFindMovie] = useState("");

  return (
    <header className="px-2 py-3 sm:px-4 inset-x-0 bg-white">
      <section className="w-full max-w-6xl mx-auto md:flex justify-between items-center">
        {/* Left Side with Logo */}
        <div className="flex justify-start items-center sm:w-5/12 px-2 gap-5">
          <button
            className="block border rounded border-gray-200 px-4 py-1 text-gray-500 cursor-pointer hover:shadow"
            onClick={() => setToggle(!toggle)}
          >
            <IoMenu className="text-3xl" />
          </button>
          <Link to="/">
            <img src={logo} alt="logo" className="w-[220]" />
          </Link>
        </div>
        {toggle ? (
          <></>
        ) : (
          <div className="w-80 fixed top-0 py-4 left-0 bottom-0 bg-gray-200 z-30 transform transition-transform delay-100 shadow px-2 overflow-y-scroll">
            <div className="flex justify-start items-center px-2 mb-4">
              <button
                className="block border rounded border-gray-200 px-4 py-1 text-gray-500 cursor-pointer hover:shadow"
                onClick={() => setToggle(!toggle)}
              >
                <IoMenu className="text-3xl" />
              </button>
              <Link to="/">
                <img src={logo} alt="logo" className="w-[220] mx-2" />
              </Link>
            </div>

            <div>
              <ul>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Home
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/adult-18"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Adult 18+
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/adult-18-300"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Adult 18+ 300mb
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/bollywood-300"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Bollywood 300Mb
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/bollywood-720"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Bollywood 720p
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/dual-audio-300"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Dual Audio 300mb
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/dual-audio-720"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Dual Audio 720p
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/hollywood-300"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Hollywood Movies 300Mb
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/hollywood-720"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Hollywood Movies 720p
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/pakistani-movies"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Pakistani Movies
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/punjabi-movies"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Punjabi Movies
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/south-hindi-300"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    South Hindi Dubbed 300Mb
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/south-hindi-720"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    South Hindi Dubbed 720p
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/telgu-300"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Telugu 300Mb
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/telgu-720"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    Telugu 720p
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/tv-shows"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    TV Shows
                  </Link>
                </li>
                <li className="w-full px-4 py-2">
                  <Link
                    to="/category/web-series"
                    className="before:content-['#'] before:text-blue-600 before:pr-2 text-gray-700"
                  >
                    WEB Series
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Right Side with Nav Links */}
        <div className="justify-center items-center w-full md:w-7/12 sm:flex my-2 md:my-0">
          {/* Search Movies Or Tv Shows */}
          <form
            method="get"
            action="/search?${findMovie}"
            className="bg-gray-200 px-4 py-1 flex justify-center items-center rounded-full w-full sm:w-5/12 shadow-inner"
          >
            <IoSearchSharp className="text-xl font-semibold text-gray-500" />
            <input
              name="find-movie"
              placeholder="Search for movies or tv shows"
              onChange={(e) => setFindMovie(e.target.value)}
              className="w-full appearance-none bg-gray-200 ml-2 px-1 py-2 outline-none text-gray-500"
            ></input>
          </form>

          {/* NavLinks */}
          <nav className="w-full hidden md:flex md:ml-8 md:w-7/12 justify-left items-center mb-3 md:mb-0">
            <Link
              to="/"
              className="hidden lg:inline-block uppercase mx-3 font-semibold tracking-wide hover:text-indigo-500 text-gray-500"
            >
              HOME
            </Link>
            <Link
              to="/trending"
              className="hidden lg:inline-block uppercase mx-3 font-semibold tracking-wide hover:text-indigo-500 text-gray-500"
            >
              TRENDING
            </Link>
            <Link
              to="/browse"
              className="hidden lg:inline-block uppercase mx-3 font-semibold tracking-wide hover:text-indigo-500 text-gray-500"
            >
              BROWSE ALL
            </Link>
          </nav>
        </div>
      </section>
    </header>
  );
}
