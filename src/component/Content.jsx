import { useState } from "react";

const Content = () => {
  const [word, setWord] = useState("");
  const [answer, setAnswer] = useState("");

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = (event) => {
    // Reverse the word
    let reverseWord = "";
    for (let index = word.length - 1; index >= 0; index--) {
      reverseWord += word.charAt(index);
    }
    reverseWord = reverseWord.toUpperCase();

    // Check if the word is palindrome or not
    let originalWord = word.toUpperCase();

    if (originalWord == reverseWord) {
      setAnswer(
        `The reverse word is ${reverseWord}, same as a original word. So, it's PALINDROME`
      );
    } else {
      setAnswer(
        `The reverse word is ${reverseWord}, NOT SAME as a original word. So, it is NOT PALINDROME`
      );
    }

    event.preventDefault();
  };

  return (
    <>
      <div className="flex bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 h-screen items-center text-center">
        <div className="container mx-auto text-white">
          <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-title">
            Palindrome
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              class="form-input my-4 px-2 py-1 sm:px-4 sm:py-3 rounded-full text-gray-900"
              value={word}
              onChange={handleChange}
            />
            <button
              class="bg-gray-500 outline outline-gray-200 mx-5 rounded-lg px-3 py-2"
              type="submit"
            >
              Enter
            </button>
          </form>
          <p className="text-xs sm:text-sm font-paragraph">{answer}</p>
        </div>
      </div>
    </>
  );
};

export default Content;
