import React from "react";
import img1 from "../assets/image/goverment.jpg";
import img2 from "../assets/image/bridge-1170x500.jpg";
function Projects() {
  return (
    <section className="flex flex-wrap gap-2 justify-evenly items-start w-[80%] m-auto mt-5  main-container">
      <figure className="w-[80%] lg:w-[45%] overflow-hidden rounded bg-slate-100">
        <div className="overflow-hidden">
          <img
            src={img1}
            alt="aaa"
            className="w-[100%] m-auto h-[200px] object-cover hover:scale-125 transition shadow"
          />
        </div>
        <div className="px-1 py-2">
          <h1 className="capitalize text-big-stone-900 font-semibold text-md md:text-lg">
            weight application for weight staion
          </h1>
          <span className="pl-1 pt-3 block mb-3 text-[10px] md:text-[1rem]">
            I re-created the frontend of Boreal Coffee's official web app
            because I got attracted to their beautiful UI. It was a great
            experience for me to build the entire frontend. lo
          </span>
          <input
            type="button"
            value="order"
            className="capitalize block w-full m-auto py-1 md:py-2 md:text-lg
            font-semibold bg-big-stone-800 text-big-stone-100 rounded
            hover:bg-big-stone-900 transition hover:text-big-stone-50"
          />
        </div>
      </figure>
      <figure className="w-[80%] lg:w-[45%] overflow-hidden rounded bg-slate-100">
        <div className="overflow-hidden">
          <img
            src={img2}
            alt="aaa"
            className="w-[100%] m-auto h-[200px] object-cover hover:scale-125 transition shadow"
          />
        </div>
        <div className="px-1 py-2">
          <h1 className="capitalize text-big-stone-900 font-semibold text-md md:text-lg">
            weight application for weight staion
          </h1>
          <span className="pl-1 pt-3 block mb-3 text-[10px] md:text-[1rem]">
            I re-created the frontend of Boreal Coffee's official web app
            because I got attracted to their beautiful UI. It was a great
            experience for me to build the entire frontend.
          </span>
          <input
            type="button"
            value="order"
            className="capitalize block w-full m-auto py-1 md:py-2 md:text-lg
            font-semibold bg-big-stone-800 text-big-stone-100 rounded
            hover:bg-big-stone-900 transition hover:text-big-stone-50"
          />
        </div>
      </figure>
    </section>
  );
}

export default Projects;
