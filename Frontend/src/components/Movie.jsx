import React from "react";
import { Link } from "react-router-dom";

export default function Movie({ id, info }) {
  return (
    <div className="w-5/12 sm:w-3/12 md:w-2/12 mx-1 md:mx-3 my-2 inline-flex flex-col">
      <Link to={`/movie?id=${id}`}>
        <div className="relative overflow-hidden">
          <img src={info.img} className="w-auto group-hover:scale-110 transform transition-transform img-fixed"/>
          <span className="absolute top-3 z-10 font-semibold right-0 bg-blue-400 px-3 drop-shadow py-0 text-white opacity-90 text-sm">{info.type}</span>
        </div>
        <div className="mt-2 transition-all block px-2 py-3 shadow-inner text-gray-500 group-hover:text-indigo-500 tracking-wide text-sm">
          {info.title}
        </div>
      </Link>
    </div>
  );
}
