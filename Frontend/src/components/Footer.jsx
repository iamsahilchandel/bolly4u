import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="container max-w-6xl mx-auto leading-normal px-4 py-6 border-t border-gray-200 text-center md:flex justify-between items-center uppercase">
      <div className="text-gray-600 dark:text-gray-200">
        <span>© 2014 - 2021, </span>
        <span className="text-indigo-500">bolly4u</span>
      </div>
      <div className="mt-2">
        <div>
          <ul className="flex justify-center items-center gap-3">
            <li className="text-[rgba(75,85,99,1)] no-underline mr-4">
              <Link to="/digital-millennium-copyright-act-policy">DCMA</Link>
            </li>
            <li className="text-[rgba(75,85,99,1)] no-underline mr-4">
              <Link to="/contact-us">Contact</Link>
            </li>
            <li className="text-[rgba(75,85,99,1)] no-underline mr-4">
              <Link to="/how-to-download-movies-on-mobile">How to Download</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
