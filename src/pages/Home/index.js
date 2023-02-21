import React from "react";
import Layout from "../../components/Layout";
import Intro from "./Intro";
import MarketingStrategies from "./MarketingStrategies";
import WhyMarketing from "./WhyMarketing";

function Home() {
  return (
    <Layout>
      <div className="w-4/5 m-auto">
        <Intro />
        <MarketingStrategies />
        <WhyMarketing />
      </div>
    </Layout>
  );
}
export default Home;
