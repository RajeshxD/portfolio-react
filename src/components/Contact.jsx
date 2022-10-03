import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#023a66] flex justify-center items-center p-4 text-[#ccd6f6]"
    >
      <form
        method="POST"
        action="https://getform.io/f/a30b860a-a012-4833-aa33-503277483952"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#00b2e1]">
            Contact
          </p>
          <p className="text-sm py-4 text-white">
            Submit the form bellow or mail me at rajesha.job@gmail.com
          </p>
        </div>
        <input
          className="p-2 bg-[#ccd6f6] text-black"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] text-black"
          type="text"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2 text-black"
          name="message"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-[#00b2e1] px-4 py-3 hover:border-[#00b2e1] my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
