import React from "react";

function Intro() {
  return (
    <>
      <div className="about-intro h-screen"></div>
      <div className="grid grid-cols-2 items-center min-h-screen">
        <div className="z-1 flex justify-center"></div>
        <div className="z-10 max-w-max flex flex-col space-y-5">
          <h1 className="text-8xl font-semibold text-white">SHEYGENCY</h1>
          <hr />
          <h1 className="text-xl text-white">OLDER | STRONGER | WISER</h1>
        </div>
      </div>
    </>
  );
}

export default Intro;
