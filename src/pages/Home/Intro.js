import React from "react";

function Intro() {
  return (
    <div className="grid grid-cols-2 h-screen items-center md:grid-cols-1 md:mt-[100px]">
      <div className="w-fit">
        <h1 className="text-6xl font-semibold text-primary">
          The Best <b className="text-secondary">Marketing</b>
        </h1>
        <h1 className="text-3xl mt-8 mb-4 font-semibold text-primary">Doesn't feel like marketing</h1>
        <button className="bg-secondary w-fit uppercase shadow-xl text-white px-7 py-3 text-xl rounded-xl">
          Get started
        </button>
      </div>
      <div>
        <lottie-player
          src="https://assets10.lottiefiles.com/packages/lf20_osdxlbqq.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
}

export default Intro;
