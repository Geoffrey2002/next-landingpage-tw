import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="p-4 text-2xl font-bold text-center">Lets work together</h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="p-3 border shadow-lg"
            type="text"
            placeholder="Name"
          />
          <input
            className="p-3 border shadow-lg"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="w-full p-3 my-2 border shadow-lg"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="w-full p-3 border shadow-lg"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="w-full p-3 mt-2 border shadow-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
