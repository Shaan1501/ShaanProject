import React from "react";

function Newsletter() {
  return (
    <div className="w-full bg-[#2699fb] p-4">
      <div className="max-w-[1320px] md:flex justify-between mx-auto py-[50px]">
        <div className="m-2">
          <h1 className="text-[20px] md:text-[40px] font-bold text-white">Want to become a web developer?</h1>
          <span className="text-white">Sign up to our newsletter and stay up to date</span>
        </div>
        <div className="m-2 sm:max-w-full">
            <input type="text" className="p-3 mr-2 text-slate-800  rounded mb-2" placeholder="Email"/>
            <button className= ' bg-black text-white p-3 rounded'>Get Started</button>
            <br/>
            <p className="text-white">
                We care about protection of your data. Read our <br/> <a href="https://www.facebook.com" className="text-black"> privacy policy </a>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
