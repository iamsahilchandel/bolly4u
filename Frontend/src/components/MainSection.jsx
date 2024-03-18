import React from "react";
import { CgMenuRight } from "react-icons/cg";
import Wave from "../assets/wave.svg";
import Movie from "./Movie";

export default function MainSection() {
  const movies = [
    {
      id: "0001",
      info: {
        img: "https://myimg.click/images/2024/03/13/River-God-Water-Strange-Story-2023.png",
        title:
          "River God Water Strange Story 2023 WEB-DL Hindi Dual Audio Full Movie Download 1080p 720p 480p",
        type: "WEB-DL",
      },
    },
    {
      id: "0002",
      info: {
        img: "https://myimg.click/images/2024/03/13/River-God-Water-Strange-Story-2023.png",
        title:
          "River God Water Strange Story 2023 WEB-DL Hindi Dual Audio Full Movie Download 1080p 720p 480p",
        type: "WEB-DL",
      },
    },
    {
      id: "0003",
      info: {
        img: "https://myimg.click/images/2024/03/13/River-God-Water-Strange-Story-2023.png",
        title:
          "River God Water Strange Story 2023 WEB-DL Hindi Dual Audio Full Movie Download 1080p 720p 480p",
        type: "WEB-DL",
      },
    },
    {
      id: "0004",
      info: {
        img: "https://myimg.click/images/2024/03/13/River-God-Water-Strange-Story-2023.png",
        title:
          "River God Water Strange Story 2023 WEB-DL Hindi Dual Audio Full Movie Download 1080p 720p 480p",
        type: "WEB-DL",
      },
    },
    {
      id: "0005",
      info: {
        img: "https://myimg.click/images/2024/03/13/River-God-Water-Strange-Story-2023.png",
        title:
          "River God Water Strange Story 2023 WEB-DL Hindi Dual Audio Full Movie Download 1080p 720p 480p",
        type: "WEB-DL",
      },
    },
    {
      id: "0006",
      info: {
        img: "https://myimg.click/images/2024/03/13/River-God-Water-Strange-Story-2023.png",
        title:
          "River God Water Strange Story 2023 WEB-DL Hindi Dual Audio Full Movie Download 1080p 720p 480p",
        type: "WEB-DL",
      },
    },
    {
      id: "0007",
      info: {
        img: "https://myimg.click/images/2024/03/13/River-God-Water-Strange-Story-2023.png",
        title:
          "River God Water Strange Story 2023 WEB-DL Hindi Dual Audio Full Movie Download 1080p 720p 480p",
        type: "WEB-DL",
      },
    },
    {
      id: "0008",
      info: {
        img: "https://myimg.click/images/2024/03/13/River-God-Water-Strange-Story-2023.png",
        title:
          "River God Water Strange Story 2023 WEB-DL Hindi Dual Audio Full Movie Download 1080p 720p 480p",
        type: "WEB-DL",
      },
    },
    {
      id: "0009",
      info: {
        img: "https://myimg.click/images/2024/03/13/River-God-Water-Strange-Story-2023.png",
        title:
          "River God Water Strange Story 2023 WEB-DL Hindi Dual Audio Full Movie Download 1080p 720p 480p",
        type: "WEB-DL",
      },
    },
    {
      id: "0010",
      info: {
        img: "https://myimg.click/images/2024/03/13/River-God-Water-Strange-Story-2023.png",
        title:
          "River God Water Strange Story 2023 WEB-DL Hindi Dual Audio Full Movie Download 1080p 720p 480p",
        type: "WEB-DL",
      },
    },
    {
      id: "0011",
      info: {
        img: "https://myimg.click/images/2024/03/13/River-God-Water-Strange-Story-2023.png",
        title:
          "River God Water Strange Story 2023 WEB-DL Hindi Dual Audio Full Movie Download 1080p 720p 480p",
        type: "WEB-DL",
      },
    },
  ];

  return (
    <main className="pt-2 mx-auto max-w-6xl">
      <div
        className="bg-no-repeat bg-cover mx-4 my-4 text-center px-2 py-3 pt-4 rounded shadow-inner"
        style={{ backgroundImage: `url(${Wave})` }}
      >
        <h1 className="text-lg text-indigo-500">
          Bolly4u : Welcome to the official website
        </h1>
        <p className="-mb-4 mt-2 text-gray-500">
          Just a faster and better place to download movies in 480p, 720p,
          1080p!
        </p>
        <div className="text-center text-indigo-400 border shadow-sm ring-1 border-indigo-200 py-3 px-4 mx-4 max-w-xl sm:mx-auto my-6 mt-10 bg-white">
          IMPORTANT: Bolly4u Is Only New Official Domain of Bolly4u
        </div>
      </div>

      <h3 className="text-gray-500 text-base sm:text-lg font-normal tracking-wide px-4 py-2 border-l-8 border-indigo-400 flex justify-between items-center container mx-2 sm:mx-auto mt-6">
        <span>
          <div className="flex gap-3 justify-start items-center">
            <CgMenuRight className="mx-1 text-indigo-500 text-xl" />

            <p>Latest Movies Added</p>
          </div>
        </span>
        <span className="px-4 py-1 shadow-inner rounded text-indigo-500 bg-indigo-100 border text-sm sm:text-base">
          Page 1
        </span>
      </h3>

      <section className="py-4 sm:py-8 text-center">
        {movies.map((movie) => {
          return <Movie key={movie.id} id={movie.id} info={movie.info} />;
        })}
      </section>
    </main>
  );
}
