import React from 'react';

const ContactUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-customBlue">Contact Us</h1>

      <section className="text-center mb-10">
        <p className="text-lg text-gray-700">
          We're here to assist you with any inquiries or support you may need. Feel free to get in touch using the information below.
        </p>
      </section>

      <section className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-customBlue">Phone</h2>
          <p className="text-lg text-gray-700">+44 (0)7515 789 661</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-customBlue">Email</h2>
          <a 
            href="mailto:info@optomshop.co.uk" 
            className="text-lg text-blue-500 underline hover:text-blue-700"
          >
            info@optomshop.co.uk
          </a>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-customBlue">Fax</h2>
          <p className="text-lg text-gray-700">+44 (0)870 838 1365</p>
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4 text-customBlue">Send Us a Message</h2>
        <form className="space-y-4 max-w-md mx-auto">
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-1 text-customBlue">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name" 
              required 
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-1 text-customBlue">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email" 
              required 
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-1 text-customBlue">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message" 
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-customSeaGreen text-white text-lg font-semibold py-2 rounded-lg hover:bg-customBlue focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
