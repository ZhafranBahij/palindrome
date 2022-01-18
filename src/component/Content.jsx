import { useState } from "react";

const Content = () => {
  const [word, setWord] = useState("");
  const [alphabets, setAlphabets] = useState([]);
  const [isPalindrome, setIsPalindrome] = useState(True);

  const handleChange = (event) => {
    setWord(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log(word);
    setAlphabets(word.split(""));
    if (word === word.reverse()) {
      console.log("Palindrome");
    }
    event.preventDefault();
  };

  return (
    <>
      <div className="flex bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 h-screen items-center text-center">
        <div className="container mx-auto text-white">
          <h1 className="font-bold text-5xl font-title">Palindrome</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              class="form-input my-4 px-4 py-3 rounded-full text-gray-900"
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
        </div>
      </div>
    </>
  );
};

export default Content;
