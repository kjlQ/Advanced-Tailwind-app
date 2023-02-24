import React from "react";

function Intro() {
  return (
    <>
      <div className="about-intro h-screen overflow-hidden"></div>
      <div className="grid grid-cols-2 items-center min-h-screen md:items-start md:mt-[100px]">
        <div className="z-1 flex justify-center md:hidden"></div>
        <div className="z-10 max-w-max flex flex-col space-y-5 md:pl-5 md:w-screen">
          <h1 className="text-8xl font-semibold text-white md:text-4xl">SHEYGENCY</h1>
          <hr />
          <h1 className="text-xl text-white">OLDER | STRONGER | WISER</h1>
        </div>
      </div>
    </>
  );
}

export default Intro;
