let Red = function () {
  return (
    <div className="py-10 overflow-hidden text-center bg-slate-100">
      <p className="text-xl font-bold">What we offer</p>
      <p>
        Career-focused courses, live mentorship and projects designed to help
        you get hired.
      </p>

      <div className="flex flex-col items-start gap-10 px-4 mt-10 md:px-20 md:flex-row">
        {/* Left: Range sliders */}
        <div className="grid flex-1 grid-cols-1 gap-6">
          <div className="flex items-center gap-6">
            <span className="w-24 font-semibold text-left">Nodejs</span>
            <input
              type="range"
              min="0"
              max="100"
              value="78"
              className="w-full h-3 bg-gray-300 rounded-lg range-thumb:bg-amber-500 range-thumb:rounded-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <span className="w-24 font-semibold text-left">Python</span>
            <input
              type="range"
              min="0"
              max="100"
              value="68"
              className="w-full h-3 bg-gray-300 rounded-lg range-thumb:bg-blue-500 range-thumb:rounded-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <span className="w-24 font-semibold text-left">Trading</span>
            <input
              type="range"
              min="0"
              max="100"
              value="90"
              className="w-full h-3 bg-gray-300 rounded-lg range-thumb:bg-blue-500 range-thumb:rounded-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <span className="w-24 font-semibold text-left">Website</span>
            <input
              type="range"
              min="0"
              max="100"
              value="70"
              className="w-full h-3 bg-gray-300 rounded-lg range-thumb:bg-blue-500 range-thumb:rounded-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <span className="w-24 font-semibold text-left">React</span>
            <input
              type="range"
              min="0"
              max="100"
              value="80"
              className="w-full h-3 bg-gray-300 rounded-lg range-thumb:bg-blue-500 range-thumb:rounded-full"
            />
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex flex-1 md:justify-end">
          <img
            src="/Reading.gif"
            alt="Illustration"
            className="object-cover h-auto rounded-lg w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Red;
