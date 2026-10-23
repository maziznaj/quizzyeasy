import { useState } from "react";
import { Link } from "react-router-dom";

// One sample question shown on the home page.
// Change the text or the answer index to try your own.
const sample = {
  question: "In DevOps, what does CI stand for?",
  options: [
    "Continuous Integration",
    "Code Inspection",
    "Container Image",
    "Cloud Infrastructure",
  ],
  answer: 0, // index of the correct option in the list above
};

const topics = ["DevOps", "React", "JavaScript", "Docker", "Kubernetes"];

function Home() {
  // null = nothing picked yet, otherwise the index the user clicked
  const [picked, setPicked] = useState(null);
  const answered = picked !== null;
  const correct = picked === sample.answer;

  // Decide the colors of each option button
 /* function optionClass(i) {
    const base =
      "w-full text-left rounded-lg border-2 px-4 py-3 font-medium transition focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300";

    if (!answered) {
      return `${base} border-indigo-200 hover:border-indigo-500 hover:bg-indigo-50`;
    }
    if (i === sample.answer) {
      return `${base} border-green-600 bg-green-50 text-green-900`;
    }
    if (i === picked) {
      return `${base} border-red-500 bg-red-50 text-red-900`;
    }
    return `${base} border-indigo-100 text-indigo-300`;
  }*/

  return (
    <main className="min-h-screen bg-indigo-950 text-white">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Left side: the message */}
        <section>
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Learn it. Quiz it. Remember it.
          </h1>
          <p className="mt-5 max-w-md text-lg text-indigo-200">
            Quizzy turns what you study into short questions you can answer in
            a minute. Pick a topic and see how much you already know.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/lessons"
              className="rounded-lg bg-amber-300 px-6 py-3 font-bold text-indigo-950 hover:bg-amber-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              Start the quiz
            </Link>
            <Link
              to="/profile"
              className="rounded-lg border-2 border-indigo-400 px-6 py-3 font-bold text-white hover:bg-indigo-900 focus:outline-none focus-visible:ring-4 focus-visible:ring-white"
            >
              View your profile
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Topics">
            {topics.map((topic) => (
              <li
                key={topic}
                className="rounded-full bg-indigo-900 px-4 py-1 text-sm text-indigo-100"
              >
                {topic}
              </li>
            ))}
          </ul>
        </section>

        {/* Right side: a live question to try right now */}
        
         
          
         

          {/* Feedback appears after the user answers */}
          <div aria-live="polite" className="mt-5 min-h-[3.5rem]">
            {answered && (
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className={correct ? "font-bold text-green-700" : "font-bold text-red-700"}>
                  {correct
                    ? "Correct! CI means Continuous Integration."
                    : "Not quite. The answer is Continuous Integration."}
                </p>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setPicked(null)}
                    className="rounded-lg border-2 border-indigo-200 px-4 py-2 text-sm font-semibold hover:bg-indigo-50 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
                  >
                    Try again
                  </button>
                  <Link
                    to="/quiz"
                    className="rounded-lg bg-indigo-700 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-600 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
                  >
                    Play the full quiz
                  </Link>
                </div>
              </div>
            )}
          </div>
        
      </div>
    </main>
  );
}

export default Home;