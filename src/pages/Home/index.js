import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import MarketingStrategies from "./MarketingStrategies";
import WhyMarketing from "./WhyMarketing";

function Home() {
  return (
    <div className="w-4/5 m-auto md:w-11/12">
      <Intro />
      <MarketingStrategies />
      <WhyMarketing />
    </div>
  );
}
export default Home;
