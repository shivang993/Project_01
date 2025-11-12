import React from "react";
import "../index.css";
import "../output.css";
import { Typewriter } from "react-simple-typewriter";

let Home = function() {
  return (
    <div className="flex justify-between w-full h-auto bg-gradient-to-r from-blue-100 to-slate-100">
        <div className="">
        <h1 className="inline-flex items-center px-3 py-1 mt-20 ml-16 text-xs rounded-full bg-slate-50 text-slate-700">Trusted by professionals • Online & Instructor-led</h1>
{/* <p className="pt-4 pl-6 ml-6 text-5xl font-extrabold">Upskill with industry- relevant courses- <br />anywhere, anytime</p> */}
 <div className="pt-10 pl-6 ml-6">
      <p className="text-5xl font-extrabold text-black">
        <Typewriter
          words={['Upskill with industry-relevant courses-', 'anywhere, anytime','']}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </p>
      <p className="mt-4 text-lg text-gray-500">
        Learn from experts and boost your career with flexible online courses.
      </p>
    </div>
<p className="mt-6 ml-12">Practical learning, real projects, and certification to help you <br />grow. Live classes, self-paced modules, and career support <br /> to launch or level up your career.</p>
    

    <button className="pb-3 pt-3 pl-6 pr-6 ml-10 mt-8  border-2 rounded-lg  text-white bg-[rgb(10,133,255)] hover:text-black hover:text-white hover:text-amber-600">Explore Courses</button>

<div className="flex gap-16 pt-10 pb-10 ml-16">
<div>
  <p className="text-2xl font-bold">120+</p>
  <p className="text-[18px]">Courses</p>
</div>

<div>
  <p className="text-2xl font-bold">50K+
</p>
  <p className="text-[18px]">Learners</p>
</div>

<div>
  <p className="text-2xl font-bold">200+</p>
  <p className="text-[18px]">Hiring Partners</p>
</div>
</div>

      </div>



      
      <div className="pt-20 pb-20 mr-16 overflow-hidden ">
        <img src="/people.jpg" alt="Book Image" className="object-cover w-full rounded-3xl h-96" />
      </div>
       <div className="absolute p-4 bg-white shadow-lg bottom-[0px] right-28 hero-overlay rounded-xl w-72">
  <div className="flex items-center space-x-3">
    <img
      src="/book.webp"
      alt="Avatar"
      className="object-cover h-10 w-15 "
    />
    <div>
      <h2 className="text-lg font-semibold text-gray-900">
        Full Stack Bootcamp
      </h2>
      <p className="text-sm text-blue-600">Live classes • 12 weeks</p>
    </div>
  </div>
  <p className="mt-3 text-sm text-gray-700">
    Next batch starts <span className="font-semibold text-blue-900">Nov 3, 2025</span>
  </p>
</div>

<div>
  
</div>

    </div>
    



  );
};

export default Home;
