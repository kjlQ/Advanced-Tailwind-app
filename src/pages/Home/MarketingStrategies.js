import React from "react";
import { FaInstagram, FaHeart, FaUsers, FaCommentAlt } from "react-icons/fa";

const strategies = [
  {
    title: "Social Optimization",
    strategie:
      "Use Social Media Effectively: Social media platforms such as Facebook, Instagram, Twitter, and LinkedIn can be powerful marketing tools. Ensure you have a strong social media presence, share high-quality content, engage with your audience, and run targeted ads.",
    img: <FaInstagram size={50} color="#e1306c" />,
  },
  {
    title: "Customer Delight",
    strategie:
      "Focus on Customer Experience: Providing exceptional customer service can help differentiate your business from competitors. Ensure your customers feel valued by providing prompt responses, personalized service, and going above and beyond to meet their needs.",
    img: <FaHeart size={50} color="#f44336" />,
  },
  {
    title: "Influencer Outreach",
    strategie:
      "Leverage Influencer Marketing: Partnering with influencers who have a large following can help increase brand awareness and drive sales. Identify influencers who align with your brand values, and collaborate with them to create authentic and engaging content.",
    img: <FaUsers size={50} color="#673ab7" />,
  },
  {
    title: "Word-of-Mouth",
    strategie:
      "Implement Referral Marketing: Encourage your satisfied customers to refer their friends and family to your business by offering referral bonuses, discounts, or other incentives. This can help you acquire new customers at a lower cost than traditional marketing methods.",
    img: <FaCommentAlt size={50} color="#4caf50" />,
  },
];

function MarketingStrategies() {
  return (
    <div>
      <h2 className="text-primary text-4xl">Want to boost your business growth?</h2>
      <p className="text-primary text-7xl mt-6 mb-12">
        The <span className="uppercase font-semibold text-secondary">solution</span> is here...
      </p>
      <p className="text-xl text-gray-600">
        To boost business growth, consider analyzing and optimizing your sales and marketing strategies, expanding your
        product or service offerings, improving operational efficiency, and investing in research and
        development.Identify your unique selling proposition (USP) and emphasize it in your marketing efforts to
        differentiate your business from competitors.Use social media and content marketing to build a strong online
        presence and engage with potential customers.Partner with complementary businesses to expand your reach and
        attract new customers.
      </p>
      <div className="grid grid-cols-2 mt-10 md:grid-cols-1">
        {strategies.map((item) => (
          <div className="w-5/6 bg-opacity-40 m-auto border rounded-2xl p-4 mb-11 hover:scale-105 transition-all hover:shadow-2xl bg-gray-100  md:w-11/12">
            <p className="text-center">{item.title}</p>
            <span className="flex justify-center mb-3 mt-9">{item.img}</span>
            <p className=" text-center m-auto mb-12 ">{item.strategie}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketingStrategies;
