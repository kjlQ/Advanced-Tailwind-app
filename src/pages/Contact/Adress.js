import React from "react";

function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
        <h1 className="text-3xl font-semibold">Get In Touch</h1>
        <p>SHEYGENCY is digital marketing agency , we provide markeking and development services</p>

        <div className="flex space-x-5 items-center">
          <div>
            <h1 className="font-semibold text-xl">Visit US</h1>
            <p>Hyderabd , Amberpet , India</p>
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div>
            <h1 className="font-semibold text-xl">Mail US</h1>
            <p>sathyaprakash195@gmail.com</p>
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div>
            <h1 className="font-semibold text-xl">Call US</h1>
            <p>9989649278</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
