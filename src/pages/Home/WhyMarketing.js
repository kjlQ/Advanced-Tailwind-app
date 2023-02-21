import React from "react";

function WhyMarketing() {
  return (
    <div>
      <div className="text-primary text-7xl text-center mt-8">
        Why <span className="text-secondary">Marketing</span> ?
      </div>
      <lottie-player
        class={"flex w-[300px] m-auto mt-[200px]"}
        src="https://assets6.lottiefiles.com/packages/lf20_oykzlfjx.json"
        background="transparent"
        speed="1"
        loop
        autoplay
      ></lottie-player>
      <div className="w-4/5 m-auto">
        <p className="text-primary text-2xl mt-3 mb-5">
          Learning marketing can be valuable for many reasons, regardless of your career path or personal interests.
          Here are a few reasons why learning marketing can be beneficial:
        </p>
        <p className="mb-10">
          1.Personal Branding: Even if you're not in a traditional marketing role, learning marketing can help you build
          and promote your personal brand. Knowing how to create content, use social media effectively, and present
          yourself in a professional manner can all help you stand out in your career or personal life. <br />
          <br />
          2.Business Management: Marketing is a key aspect of any business, and understanding marketing principles can
          be important for managing a business effectively. Knowing how to identify and target the right customers,
          create compelling messaging, and drive sales can all be valuable skills for business leaders. <br />
          <br />
          3.Career Opportunities: If you're interested in pursuing a career in marketing, having a solid understanding
          of marketing principles and techniques can help you stand out in a crowded field. Marketing is a broad field
          with many different roles and specializations, so learning marketing can open up a wide range of career
          opportunities. <br />
          <br />
          4.Consumer Behavior: Understanding marketing can also help you better understand consumer behavior and how
          businesses use psychology and marketing techniques to influence buying decisions. This can be valuable for
          making more informed purchasing decisions and avoiding marketing traps and scams.
        </p>
      </div>
    </div>
  );
}

export default WhyMarketing;
