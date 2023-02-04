import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const Contact = ({ google }) => {
  return (
    <>
      <form className="bg-white p-6 rounded-lg shadow-xl">
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
      <div className="mt-8">
        <Map
          google={google}
          zoom={14}
          style={{ width: '100%', height: '400px' }}
          initialCenter={{
            lat: 32.79943385059242,
            lng: -96.55949679306434
          }}
        >
          <Marker position={{ lat: 32.79943385059242, lng: -96.55949679306434 }} />
        </Map>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBMReomOXS9C1a9owD1pZkUSHynLd02Pg'
})(Contact);
