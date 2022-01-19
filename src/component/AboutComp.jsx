import { useState } from "react";

const About = () => {
  return (
    <>
      <div className="flex bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 h-screen items-center text-center">
        <div className="container mx-auto text-white">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-title">
            Palindrome
          </h1>
          <div className="text-xs sm:text-sm font-paragraph mt-3 ">
            <p className="italic ">
              "A palindrome is a word, number, phrase, or other sequence of
              characters which reads the same backward as forward, such as madam
              or racecar."
            </p>
            <a
              href="https://en.wikipedia.org/wiki/Palindrome"
              className="font-bold mt-1"
              target="_blank"
            >
              {" "}
              - Wikipedia{" "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
