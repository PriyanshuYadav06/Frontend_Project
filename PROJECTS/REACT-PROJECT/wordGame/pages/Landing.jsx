import React from "react";
const ZapIcon = () => (
  <svg
    className="w-8 h-8 text-green-700"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 10V3L4 14h7v7l9-11h-7z"
    ></path>
  </svg>
);

const LightBulbIcon = () => (
  <svg
    className="w-8 h-8 text-blue-700"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.373 3.373 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    ></path>
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-8 h-8 text-yellow-700"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    ></path>
  </svg>
);
export default function Landing() {
  return (
    <div className="bg-slate-50 text-gray-800 font-['Inter',_sans-serif]">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Word Guess Game</h1>
          <a
            href="/dashboard"
            className="bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-xl"
          >
            Play Now
          </a>
        </nav>
      </header>
      <main>
        <section className="bg-gradient-to-br from-sky-50 to-sky-100 py-20 md:py-32">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
              Challenge Your Mind.
            </h2>
            <h3 className="text-4xl md:text-6xl font-extrabold text-green-600 leading-tight mb-6">
              Guess The Word.
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
              The ultimate word puzzle game that will test your vocabulary and
              deduction skills. Fun, simple, and addictively challenging!
            </p>
            <a
              href="/dashboard"
              className="inline-block bg-green-600 text-white font-bold text-lg py-4 px-10 rounded-full shadow-xl hover:bg-green-700 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
            >
              Start Playing for Free
            </a>
            <div className="mt-16 md:mt-24 max-w-4xl mx-auto"></div>
          </div>
        </section>
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-3">
                Why You'll Love This Game
              </h2>
              <p className="text-gray-600 text-lg">
                Everything you need for a great puzzle experience.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="bg-slate-50 p-8 rounded-xl shadow-md text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <div className="mb-4 inline-block p-4 bg-green-200 rounded-full">
                  <ZapIcon />
                </div>
                <h3 className="text-2xl font-bold mb-2">Engaging Puzzles</h3>
                <p className="text-gray-600">
                  Hundreds of words from various categories to keep you
                  entertained for hours.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-xl shadow-md text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <div className="mb-4 inline-block p-4 bg-blue-200 rounded-full">
                  <LightBulbIcon />
                </div>
                <h3 className="text-2xl font-bold mb-2">Helpful Hints</h3>
                <p className="text-gray-600">
                  Stuck on a word? Use a hint to get a clue or remove unneeded
                  letters from the board.
                </p>
              </div>
              <div className="bg-slate-50 p-8 rounded-xl shadow-md text-center transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
                <div className="mb-4 inline-block p-4 bg-yellow-200 rounded-full">
                  <PhoneIcon />
                </div>
                <h3 className="text-2xl font-bold mb-2">Clean Interface</h3>
                <p className="text-gray-600">
                  A simple, intuitive, and visually pleasing design that lets
                  you focus on the fun.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-to-play" className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-3">How to Play</h2>
              <p className="text-gray-600 text-lg">It's as easy as 1, 2, 3!</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="text-center max-w-xs">
                <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center bg-white shadow-lg rounded-full font-bold text-3xl text-green-600">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">See the Hint</h3>
                <p className="text-gray-600">
                  Read the hint provided to get an idea of what the secret word
                  is.
                </p>
              </div>
              <div className="text-center max-w-xs">
                <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center bg-white shadow-lg rounded-full font-bold text-3xl text-green-600">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Pick Letters</h3>
                <p className="text-gray-600">
                  Use the on-screen keyboard to select letters you think are in
                  the word.
                </p>
              </div>
              <div className="text-center max-w-xs">
                <div className="mx-auto mb-4 w-20 h-20 flex items-center justify-center bg-white shadow-lg rounded-full font-bold text-3xl text-green-600">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Guess & Win!</h3>
                <p className="text-gray-600">
                  Fill in all the letters correctly to solve the puzzle and win
                  the round.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-green-600">
          <div className="container mx-auto px-6 py-20 text-center">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to Test Your Wits?
            </h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto mb-8">
              Click the button below to jump right into the action. No
              downloads, no sign-ups required.
            </p>
            <a
              href="/dashboard"
              className="inline-block bg-white text-green-600 font-bold text-lg py-4 px-10 rounded-full shadow-xl hover:bg-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
            >
              Play The Game Now
            </a>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-gray-400 mt-2">
            Designed with ❤️ by Priyanshu Yadav.
          </p>
        </div>
      </footer>
    </div>
  );
}
