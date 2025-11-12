import React from "react";

const About = () => {
  return (
    <div className="min-h-screen text-gray-800 bg-gray-50">
      {/* Hero Section */}
      <section className="px-6 py-16 text-black bg-[#d1ef9a] lg:px-20">
        <h1 className="mb-4 text-4xl font-bold text-amber-600">About Our Platform</h1>
        <p className="max-w-3xl text-lg leading-relaxed">
          We are a growing online learning community focused on practical and
          career-oriented education. Our mission is to connect learners with
          experienced mentors who can guide them through real-world projects and
          skill-building exercises. Whether you're diving into web development,
          Python, or trading, our mentors ensure you gain true professional
          expertise.
        </p>
      </section>

      {/* Our Vision */}
      <section className="flex flex-col items-start gap-10 px-6 py-16 lg:px-20 lg:flex-row">
        <div className="flex-1">
          <h2 className="mb-4 text-3xl font-semibold text-amber-600">
            Our Vision
          </h2>
          <p className="mb-6 font-semibold leading-relaxed text-gray-700">
            Our vision is to build a space where anyone with curiosity can learn
            and grow without limits. We aim to make learning interactive,
            project-driven, and accessible for everyone—whether you’re a
            beginner or an advanced learner.
          </p>
          <p className="font-semibold leading-relaxed text-gray-700">
            Each course is carefully structured to give you not only theoretical
            understanding but also the confidence to apply it in real-world
            projects. We focus on growth through mentorship, consistency, and
            innovation.
          </p>
        </div>

        <div className="flex-1">
          <img
            src="/learning.jpg"
            alt="Learning illustration"
            className="rounded-2xl shadow-md object-cover w-full h-[350px]"
          />
        </div>
      </section>

      {/* Mentors Section */}
      <section className="px-6 py-20 bg-white lg:px-20">
        <h2 className="mb-12 text-3xl font-semibold text-orange-800">
          Meet Our Mentors
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Shivang Nagpure */}
          <div className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg">
            <img
              src="/me.png"
              alt="Shivang Nagpure"
              className="object-cover rounded-full w-28 h-28"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-600">
              Shivang Nagpure
            </h3>
            <p className="mb-3 text-gray-500">Web Developer & Mentor</p>
            <p className="text-sm leading-relaxed text-gray-700">
              Shivang is a passionate full-stack web developer with hands-on
              experience in React, Node.js, and database management. His
              teaching style focuses on simplifying complex concepts and helping
              students create real, production-ready applications.
            </p>
          </div>

          {/* Om Ninwane */}
          <div className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg">
            <img
              src="/python.png"
              alt="Om Ninwane"
              className="object-cover rounded-full w-28 h-28"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-600">
              Om Ninwane
            </h3>
            <p className="mb-3 text-gray-500">Python Developer & Instructor</p>
            <p className="text-sm leading-relaxed text-gray-700">
              Om is a Python enthusiast with expertise in backend systems,
              automation, and data analytics. He believes in teaching through
              coding practice, problem-solving, and step-by-step project
              development to strengthen logic and programming skills.
            </p>
          </div>

          {/* Chaitanya Betwar */}
          <div className="p-6 transition shadow bg-gray-50 rounded-xl hover:shadow-lg">
            <img
              src="/trading.png"
              alt="Chaitanya Betwar"
              className="object-cover rounded-full w-28 h-28"
            />
            <h3 className="mt-4 text-xl font-semibold text-blue-600">
              Chaitanya Betwar
            </h3>
            <p className="mb-3 text-gray-500">Trading & Investment Mentor</p>
            <p className="text-sm leading-relaxed text-gray-700">
              Chaitanya is a skilled trader specializing in stock markets,
              crypto, and forex. With years of experience in technical and
              fundamental analysis, he teaches smart trading strategies and risk
              management to help learners achieve consistent financial growth.
            </p>
          </div>
        </div>
      </section>

      {/* Certification Info */}
      <section className="px-6 py-16 bg-gray-100 lg:px-20">
        <h2 className="mb-6 text-3xl font-semibold text-blue-600">
          Certification
        </h2>
        <p className="max-w-3xl leading-relaxed text-gray-700">
          Upon successful completion of your course, you’ll receive an official
          certificate that verifies your skills and achievements. This
          certificate is designed to help you stand out in job applications,
          showcase your learning on LinkedIn, and demonstrate your dedication to
          continuous improvement.
        </p>
        <p className="max-w-3xl mt-4 leading-relaxed text-gray-700">
          We encourage our students to include their certificates in resumes and
          portfolios—it’s a strong way to validate your progress and
          professionalism in the field.
        </p>
      </section>

      {/* Final Message */}
      <section className="px-6 py-16 lg:px-20">
        <div className="max-w-5xl">
          <h2 className="mb-4 text-3xl font-semibold text-blue-600">
            Why Choose Us
          </h2>
          <p className="mb-4 leading-relaxed text-gray-700">
            What makes us different is our focus on practical learning and
            one-on-one mentorship. Every student gets personal guidance to help
            them apply knowledge effectively. We go beyond traditional courses
            by ensuring that you build real projects, improve your portfolio,
            and grow your confidence as a professional.
          </p>
          <p className="leading-relaxed text-gray-700">
            Join us to explore a journey where learning feels exciting and
            productive — because your growth is our success.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 text-sm text-black bg-[#d1ef9a]">
        <div className="flex flex-col justify-between max-w-6xl mx-auto sm:flex-row">
          <p>© {new Date().getFullYear()} LearnHub. All rights reserved.</p>
          <p>Developed with 💙 by Shivang Nagpure </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
