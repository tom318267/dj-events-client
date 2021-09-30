import React from "react";

const Showcase = () => {
  return (
    <div className="Showcase text-white flex flex-col justify-center items-center">
      <div className="slide-in-blurred-top text-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold font-sanchez mb-2">
          Welcome to the party!
        </h1>
        <h2 className="text-md sm:text-lg md:text-2xl font-light font-roboto">
          Find the hottest DJ events near you!
        </h2>
      </div>
    </div>
  );
};

export default Showcase;
