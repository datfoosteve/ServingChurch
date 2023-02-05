import React from 'react'

const Contact = () => {
    return (
      <div className="flex">
        <form className="w-1/2 bg-white p-6 rounded-lg shadow-xl mr-6">
          <h2 className="text-lg font-medium mb-4">Contact Us</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="bg-gray-200 border border-gray-300 rounded-lg w-full py-2 px-4"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="bg-gray-200 border border-gray-300 rounded-lg w-full py-2 px-4"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-gray-200 border border-gray-300 rounded-lg w-full py-2 px-4"
              id="message"
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button className="bg-teal-500 text-white rounded-lg px-4 py-2">
            Submit
          </button>
        </form>
        <div className="w-1/2">
          <iframe
            className="rounded-lg shadow-xl"
            src="https://maps.google.com/maps?q=Sunnyvale%20High%20School&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          />
        </div>
      </div>
    )
  }

  export default Contact