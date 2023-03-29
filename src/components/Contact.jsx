import React from "react";
import { useSelector } from "react-redux";
function Contact() {
  const isDark = useSelector((state) => state.theme.value);

  return (
    <div
      className={` w-[80%] md:w-[60%] p-1 m-auto font-semibold ${
        isDark ? `text-big-stone-200` : `text-big-stone-900`
      }`}
    >
      <h1 className="text-lg ml-1 mt-2">Name</h1>
      <input
        type="text"
        className="w-full m-1 h-[4rem] rounded-lg border  px-2 py-2 pb-2  outline-none  "
        placeholder="Enter Full Name"
      />
      <h1 className="text-lg ml-1 mt-2">Email</h1>
      <input
        type="email"
        className="w-full m-1 h-[4rem] rounded-lg border  px-2 py-2 pb-2  outline-none  "
        placeholder="Enter Your Email"
      />
      <h1 className="text-lg ml-1 mt-2">Message</h1>
      <textarea
        type=""
        className="w-full m-1 rounded-lg border  px-2 py-7 pb-2 h-[20vh] outline-none  "
        placeholder="Enter Your Message"
      ></textarea>
      <input
        type="button"
        value="submit"
        className={` w-full m-1 rounded-lg border  p-4  outline-none ${
          isDark
            ? `text-big-stone-200 hover:bg-big-stone-800`
            : `text-big-stone-900 bg-big-stone-200 hover:bg-big-stone-400`
        } `}
      />
    </div>
  );
}

export default Contact;
