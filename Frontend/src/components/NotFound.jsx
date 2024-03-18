import React from "react";

export default function NotFound() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col justify-center items-center flex-wrap w-full p-4">
        <h2 className="text-6xl uppercase">404 Not Found</h2>
        <p className="my-2">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
