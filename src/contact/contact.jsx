import { useState } from "react";

let Contact = function () {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // When input changes, update the state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // When user submits
  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert data to a downloadable text
    const fileData = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}
----------------------------
    `;

    // Create a Blob (file object)
    const blob = new Blob([fileData], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "contact_form_data.txt"; // File name for download
    link.click();

    // Reset form after submit
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div>
      <section id="contact" className="py-16 ">
        <div className="py-10 bg-gray-50">
          <div className="max-w-6xl px-6 mx-auto sm:px-8 lg:px-10">
            <div className="flex items-center gap-4 mb-6">
              <img src="/tact.gif" alt="Contact" className="w-10 h-12" />
              <h2 className="text-4xl font-bold text-gray-600">Contact Us</h2>
            </div>
            {/* <p className="mb-8 text-gray-600">
              If you have a doubt, contact us and we may help you.
            </p> */}

            <div className="flex flex-col gap-10 lg:flex-row">
                   <div className="flex items-center justify-center flex-1">
                <img
                  src="/CCon.gif"
                  alt="Contact Illustration"
                  className="w-full h-auto shadow-lg rounded-xl"
                />
              </div>
              {/* Left: Form */}
              <form
                onSubmit={handleSubmit}
                className="flex-1 pt-8 pb-10 pl-8 pr-8 shadow bg-slate-100 rounded-xl"
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 mb-4 shadow-lg rounded-xl"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email ID"
                  className="w-full p-4 mb-4 shadow-lg rounded-xl"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="w-full px-4 py-3 mb-4 shadow-lg rounded-xl"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows="6"
                  className="w-full px-4 py-3 mb-4 shadow-lg rounded-xl"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 mt-4 font-bold transition bg-blue-400 rounded-lg hover:text-white"
                >
                  Submit
                </button>
              </form>

              {/* Right: Image */}
           
            </div>
          </div>
        </div>
      </section>
      <div className="ml-24 font-sans text-4xl font-bold text-yellow-900">
        <p>Information :-</p>
        </div>
      
<div className="grid gap-10 pb-20 pl-32 mt-16 mr-12 lg:grid-cols-2 sm:grid-cols-1 ">

    <div>
<div className="flex gap-4 ">
    <img src="/email.gif" alt="Email Info" className="w-32 h-20"/> 
    <div>
<p className="font-mono text-3xl font-bold">Email</p> 
<p className="font-mono">
  <a href="mailto:BookLearn@gmail.com"   title="Email us" className="text-blue-600 hover:underline">
    BookLearn@gmail.com
  </a>
</p>

</div>
</div>
<br /><br />
<div className="flex gap-4">
    <img src="/phone.gif" alt="Email Info" className="w-32 h-20 rounded-md"/> 
    <div>
<p className="font-mono text-3xl font-bold text-red-500 ">Call US</p> 

<p className="font-mono">
  <a href="tel:+919770361955"  title="Call Us" className="text-blue-600 hover:underline">
    +91 97703 61955
  </a>
</p>

</div>
</div>
</div>
<div>
  <p className="overflow-hidden text-3xl font-extrabold border-r-4 text-amber-500 whitespace-nowrap border-amber-500 animate-typing">
    Location :-
  </p>


<div className="w-full  h-[400px] rounded-lg  overflow-hidden mt-12 shadow-lg">
  <iframe
    title="Google Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12734.593252770892!2d79.08716173882469!3d21.13149660360925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5772dba99%3A0xb9fed98933f5dd48!2sMedical%20Chowk%2C%20Nagpur%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1762931270632!5m2!1sen!2sin"
    className="w-full h-full border-0"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

</div>




</div>      
    </div>
  );
};

export default Contact;
