let Fyg = function () {
  return (
    <div>
      {/* COURSES */}
      <div className="px-6 mx-auto max-w-8xl sm:px-8 lg:px-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="mt-6 text-2xl font-bold">Our Courses</h3>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Full Stack */}
          <div className="p-5 transition bg-white shadow rounded-xl hover:shadow-lg">
            <img
              src="/node.jpg"
              className="object-cover w-full h-40 transition-transform rounded-md transition-y-300"
              alt="Full Stack"
            />
            <div className="mt-4">
              <h4 className="font-semibold">Full Stack Web Development</h4>
              <p className="mt-1 text-sm text-slate-500">
                Build modern web application and websites.
              </p>
              <div className="flex items-center justify-between mt-3">
                <div className="text-sm font-semibold">₹6,999</div>
                <button
                  className="text-sm text-blue-600"
                  data-course="Full Stack Web Development"
                  data-price="6999"
                >
                  Enroll →
                </button>
              </div>
            </div>
          </div>

          {/* Python */}
          <div className="p-5 transition bg-white shadow rounded-xl hover:shadow-lg">
            <img
              src="/python.gif"
              className="object-cover w-full h-40 rounded-md"
              alt="Python"
            />
            <div className="mt-4">
              <h4 className="font-semibold">Python Development</h4>
              <p className="mt-1 text-sm text-slate-500">
                Development, web development & visualization.
              </p>
              <div className="flex items-center justify-between mt-3">
                <div className="text-sm font-semibold">₹6,999</div>
                <button
                  className="text-sm text-blue-600"
                  data-course="Python Development"
                  data-price="6999"
                >
                  Enroll →
                </button>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="p-5 transition bg-white shadow rounded-xl hover:shadow-lg">
            <img
              src="/backend.jpeg"
              className="object-cover w-full h-40 rounded-md"
              alt="Backend"
            />
            <div className="mt-4">
              <h4 className="font-semibold">Backend Web Development</h4>
              <p className="mt-1 text-sm text-slate-500">
                Back-end skills to build complete websites.
              </p>
              <div className="flex items-center justify-between mt-3">
                <div className="text-sm font-semibold">₹6,999</div>
                <button
                  className="text-sm text-blue-600"
                  data-course="Backend Web Development"
                  data-price="6999"
                >
                  Enroll →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MENTORS */}
<div className="px-6 py-10 mx-auto max-w-7xl">
  <h2 className="mb-6 ml-2 text-2xl font-bold">Mentors</h2>

  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    {/* Card 1 */}
    <div className="p-5 transition bg-white rounded-lg shadow hover:shadow-lg">
      <img
        src="/me.png"
        alt="Full Stack"
        className="object-cover w-full h-40 rounded-md"
      />
      <h3 className="mt-4 text-xl font-semibold">Shivang Nagpure</h3>
      <p className="mt-1 text-gray-500">Learn to build complete web applications.</p>
    </div>

    {/* Card 2 */}
    <div className="p-5 transition bg-white rounded-lg shadow hover:shadow-lg">
      <img
        src="/me.png"
        alt="Python"
        className="object-cover w-full h-40 rounded-md"
      />
      <h3 className="mt-4 text-xl font-semibold">Om Ninwane</h3>
      <p className="mt-1 text-gray-500">Learn in Python for web and data projects.</p>
    </div>

    {/* Card 3 */}
    <div className="p-5 transition bg-white rounded-lg shadow hover:shadow-lg">
      <img
        src="/friend1.png"
        alt="Backend"
        className="object-cover w-full h-40 rounded-md"
      />
      <h3 className="mt-4 text-xl font-semibold">Chaitanya Betwar</h3>
      <p className="mt-1 text-gray-500">Build your profit via trading & investing.</p>
    </div>
  </div>
</div>

      {/* CONTACT */}
      <section id="contact" className="py-16 shadow-lg ">
       <div className="py-10 bg-gray-50">
  <div className="max-w-6xl px-6 mx-auto sm:px-8 lg:px-10">
    <div className="flex items-center gap-4 mb-6">
      <img src="/contact.gif" alt="Contact" className="w-10 h-12" />
      <h2 className="text-2xl font-bold text-blue-400">Don't Miss Out – Register Now</h2>
    </div>
    <p className="mb-8 text-gray-600">
      If you have a doubt, contact us and we may help you.
    </p>

    {/* Two-column layout */}
    <div className="flex flex-col gap-10 lg:flex-row">
      {/* Left: Form */}
      <div className="flex-1 pt-8 pl-8 pr-8 bg-slate-100 shagdow rounded-xl">
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-3 mb-4 shadow-lg rounded-xl"
        />
        <input
          type="email"
          placeholder="Email ID"
          className="w-full px-4 py-3 mb-4 shadow-lg rounded-xl"
        />
        <textarea
          placeholder="Message"
          rows="6"
          className="w-full px-4 py-3 mb-4 shadow-lg rounded-xl"
        ></textarea>
        <button className="w-full py-3 mt-4 font-bold transition bg-orange-400 rounded-lg hover:text-white hover:bg-orange-500">
          Submit
        </button>
      </div>

      {/* Right: Image */}
      <div className="flex items-center justify-center flex-1">
        <img
          src="/ca.gif"
          alt="Contact Illustration"
          className="w-full h-auto shadow-lg rounded-xl"
        />
      </div>
    </div>
  </div>
</div>

      </section>
    </div>



// Footers






  );
};

export default Fyg;
