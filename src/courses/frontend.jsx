import React, { useState } from "react";

const Frontend = () => {
  const [activeButton, setActiveButton] = useState(null);

  return (
  <div><p>this is me</p>
    <div className="min-h-screen py-10 bg-gray-50">
<p className="text-[40px] underline font-extrabold text-center text-blue-600 leading-[70px]">
cou
</p>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        {["Frontend", "Backend", "Python", "React", "Trading"].map((course) => (
          <button
            key={course}
            onClick={() => setActiveButton(course)}
            className={`text-lg font-semibold pb-2 border-b-4 transition-all ${
              activeButton === course
                ? "border-blue-600 text-yellow-600"
                : "border-transparent hover:border-blue-300 text-gray-600"
            }`}
          >
            {course}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex justify-center mt-10">
        {activeButton === "Frontend" && (
          <div className="p-5 transition bg-white rounded-lg shadow hover:shadow-lg w-[300px] text-center">
            <img
              src="/me.png"
              alt="Frontend"
              className="object-cover w-full h-40 rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold">Frontend Development</h3>
            <p className="mt-1 text-gray-500">
              Learn to build complete web applications.
            </p>
          </div>
        )}

        {activeButton === "Backend" && (
          <div className="p-5 transition bg-white rounded-lg shadow hover:shadow-lg w-[300px] text-center">
            <img
              src="/backend.png"
              alt="Backend"
              className="object-cover w-full h-40 rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold">Backend Development</h3>
            <p className="mt-1 text-gray-500">
              Master Node.js, Express, and databases like MongoDB.
            </p>
          </div>
        )}

        {activeButton === "Python" && (
          <div className="p-5 transition bg-white rounded-lg shadow hover:shadow-lg w-[300px] text-center">
            <img
              src="/python.png"
              alt="Python"
              className="object-cover w-full h-40 rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold">Python Programming</h3>
            <p className="mt-1 text-gray-500">
              Learn Python for web, data, and automation.
            </p>
          </div>
        )}

        {activeButton === "React" && (
          <div className="p-5 transition bg-white rounded-lg shadow hover:shadow-lg w-[300px] text-center">
            <img
              src="/react.png"
              alt="React"
              className="object-cover w-full h-40 rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold">React JS</h3>
            <p className="mt-1 text-gray-500">
              Build dynamic, interactive user interfaces with React.
            </p>
          </div>
        )}

        {activeButton === "Trading" && (
          <div className="p-5 transition bg-white rounded-lg shadow hover:shadow-lg w-[300px] text-center">
            <img
              src="/trading.png"
              alt="Trading"
              className="object-cover w-full h-40 rounded-md"
            />
            <h3 className="mt-4 text-xl font-semibold">Trading Mastery</h3>
            <p className="mt-1 text-gray-500">
              Learn stock, forex, and crypto trading strategies.
            </p>
          </div>
        )}
      </div>

  
    </div>

</div>

  );
};

export default Frontend;
