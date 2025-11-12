import { useState } from "react";

let Course = function () {
  // store which button is active
  const [activeButton, setActiveButton] = useState(null);

  return (
    <div className="h-full py-10 bg-green-50">
      <p className="mt-12 ml-12 text-xl font-bold text-orange-600">Courses</p>
      <p className="pl-12 text-[18px] font-semibold">
        We offer a wide range of courses designed to help you build your career and upgrade your skills. <br />
        From web development and programming to design and trading — our hands-on training programs ensure <br />
        you learn by doing, not just by watching.
      </p>

      {/* Buttons */}
      <div className="grid grid-cols-5 pb-10 pl-32 mt-16">
        {/* Frontend */}
        <button
          onClick={() => setActiveButton("Frontend")}
          className="relative px-6 py-2 text-lg font-semibold text-blue-700 transition-all duration-300 hover:text-blue-900"
        >
          Frontend
          {activeButton === "Frontend" && (
            <span className="absolute left-0 right-0 mx-auto bottom-[-6px] w-16 h-[3px] bg-blue-700 rounded-full"></span>
          )}
        </button>

        {/* Backend */}
        <button
          onClick={() => setActiveButton("Backend")}
          className="relative px-6 py-2 text-lg font-semibold text-blue-700 transition-all duration-300 hover:text-blue-900"
        >
          Backend
          {activeButton === "Backend" && (
            <span className="absolute left-0 right-0 mx-auto bottom-[-6px] w-16 h-[3px] bg-blue-700 rounded-full"></span>
          )}
        </button>

        {/* Python */}
        <button
          onClick={() => setActiveButton("Python")}
          className="relative px-6 py-2 text-lg font-semibold text-blue-700 transition-all duration-300 hover:text-blue-900"
        >
          Python
          {activeButton === "Python" && (
            <span className="absolute left-0 right-0 mx-auto bottom-[-6px] w-16 h-[3px] bg-blue-700 rounded-full"></span>
          )}
        </button>



        {/* Trading */}
        <button
          onClick={() => setActiveButton("Trading")}
          className="relative px-6 py-2 text-lg font-semibold text-blue-700 transition-all duration-300 hover:text-blue-900"
        >
          Trading
          {activeButton === "Trading" && (
            <span className="absolute left-0 right-0 mx-auto bottom-[-6px] w-16 h-[3px] bg-blue-700 rounded-full"></span>
          )}
        </button>
      </div>

      {/* Render content below when button clicked */}
      <div className="flex justify-center mt-10">
        {activeButton === "Frontend" && (
          <div className="grid grid-cols-2 gap-8 p-10 pl-16 bg-[#e7effc] ">
      <div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/stack.gif"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all m h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">Frontend development</h3>
  <p className="mt-2 text-black">
An online Full Stack Web Development course teaches front-end and back-end skills to build complete websites.
  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-4 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>

<div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/java.gif"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all m h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">Javascript</h3>
  <p className="mt-2 text-black">
An online Full Stack Web Development course teaches front-end and back-end skills to build complete websites.
  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-4 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>
        
<div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/man.gif"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all m h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">Javascript</h3>
  <p className="mt-2 text-black">
An online Full Stack Web Development course teaches front-end and back-end skills to build complete websites.
  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-4 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>
          </div>
          
        )}

        {activeButton === "Backend" && (
            <div className="grid grid-cols-2 gap-8 p-10 pl-16 bg-[#e7effc] ">
      <div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/back.gif"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all m h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">Backend development</h3>
  <p className="mt-2 text-black">
Create your backend using Node.js and Express.js. Include routes that display simple messages like a welcome note and an about description
  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-4 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>

<div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/au.gif"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all m h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">Authentication</h3>
  <p className="mt-2 text-black">
An online Full Stack Web Development course teaches front-end and back-end skills to build complete websites.
  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-4 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>
        
<div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/entgif.gif"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all m h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">URL validation</h3>
  <p className="mt-2 text-black">
Authentication is the process of verifying a user's identity before granting access to a system.
  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-4 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>
          </div>
        )}

        {activeButton === "Python" && (
     <div className="grid grid-cols-2 gap-8 p-10 pl-16 bg-[#e7effc] ">
      <div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/py.gif"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">Python development</h3>
  <p className="mt-2 text-black">
Python development involves creating applications, websites, and automation scripts using the Python language.
  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-4 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>

<div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/data.jpg"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all m h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">Data Analyst</h3>
  <p className="mt-2 text-black">
A data analyst collects, processes, and interprets data to help organizations make informed decisions.
  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-8 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>
        

          </div>



        )}



        {activeButton === "Trading" && (
      <div className="grid grid-cols-2 gap-8 p-10 pl-16 bg-[#e7effc] ">
      <div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/trad.avif"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all m h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">Trading</h3>
  <p className="mt-2 text-black">
Trading involves buying and selling financial assets like stocks, currencies, or commodities to make a profit.  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-4 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>

<div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/invest.jpg"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all m h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">Investment</h3>
  <p className="mt-2 text-black">


Investment is the act of putting money into assets like stocks, real estate, or businesses to earn returns over time.
  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-4 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>
        
<div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/bitcoin.jpeg"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all m h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">Crypto</h3>
  <p className="mt-2 text-black">
Binomo trading is an online trading platform where users predict the price movement of various assets like currencies and stocks.
  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-4 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>
<div className="flex flex-col items-center justify-center pb-6 bg-white shadow-lg w-80 rounded-2xl ">
<img
  src="/ana.avif"
  alt="Full Stack"
  className="object-cover w-64 pt-4 duration-700 ease-in-out rounded-lg ransition-all m h-80 hover:scale-110 hover:-translate-y-2"
/>
<div className="px-6">
  <h3 className="mt-4 text-[24px] font-semibold text-black">Market Analysis</h3>
  <p className="mt-2 text-black">

Market analysis involves studying industry trends, customer behavior, and competitor strategies.
  </p>
  <div className=" pl-4 gap-4 w-40 h-10 flex items-center  py-1 mt-4 font-semibold text-[18px]  border-2 rounded-lg border-amber-800 hover:bg-orange-300">
    <div>
  <button className="" >Enroll Now</button>
  </div>
  <div>
  <img src="/arrow.gif" alt="" className="w-8" />
  </div>
  </div>
  </div>
</div>
          </div>
        )}
      </div>
     <div>
   
 <div className="grid grid-cols-2 mt-24">
     <div className="ml-20">
      <p className="text-3xl font-semibold text-amber-700">Certificate :-</p>
      <p className="mt-4 font-bold">Our certificates are more than just a document. <br /> They are a verified testament to your hard work, skills, <br />and commitment to learning, recognized by industry leaders.</p>



<div className="mt-6">
  <div className="flex items-center gap-2">
<div>
  <img src="/tick.png" alt="" className="w-8" />
  </div>
  <div>
  <p className=" font-semibold text-[18px]">Boost Your Resume: Add a credential that makes you stand out to employers.</p>
  
  </div>
  </div>
   <div className="flex items-center gap-2">
<div>
  <img src="/Google.webp" alt="" className="w-8" />
  </div>
  <div>
  <p className=" font-semibold text-[18px]">Boost Your Resume: Add a credential that makes you stand out to employers.</p>
  
  </div>
  </div>
   <div className="flex items-center gap-2">
<div>
  <img src="/cat.gif" alt="" className="w-8" />
  </div>
  <div>
  <p className=" font-semibold text-[18px]">Boost Your Resume: Add a credential that makes you stand out to employers.</p>
  
  </div>
  </div>
</div>

      
     </div>
   <div>

    <img src="/ter.jpg" alt="Certificate_Image" className="mr-4 rounded-lg" />
   </div>
  
<div>
   



  
</div>


  
 </div>

   

<div className="grid grid-cols-2 p-12 mt-4 ">
  
  <div className="">
    <img src="/cer 1.jpeg" alt="Certificate 1" className="w-3/4 rounded-lg hover:shadow-2xl h-96" />
  </div>
    <div>
    <img src="/cer 2.jpeg" alt="" className="rounded-lg hover:shadow-2xl h-96"/>
  </div>
</div> 
 <div>
  <img src="/cer 3.jpeg" alt="" className="flex items-center w-2/3 ml-40 rounded-lg hover:shadow-2xl" />
</div>
      
     </div>
    </div>
  );
};

export default Course;
