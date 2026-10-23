import { Link } from "react-router-dom";

function Lessons() {
       const lessons = [
         {
            id: "docker",
           title: "Docker",
           description: "Images, containers and volumes.",
         },
      {
       id: "javascript",
       title: "JavaScript",
       description: "Variables, functions and arrays.",
      },
     ];

  return (
    <main className="min-h-screen bg-indigo-950 text-white">
      <div className="mx-auto max-w-3xl px-6 py-14">
        <h1 className="text-3xl font-extrabold sm:text-4xl">Choose a lesson</h1>
        <p className="mt-3 text-indigo-200">
          Each lesson has its own questions. Pick one to start.
        </p>

          <ul className="mt-8 space-y-4">
          {lessons.map((lesson) => (
            <li key={lesson.id}>
              <Link
                to={`/quiz-${lesson.id}`}
                className="block rounded-xl bg-white p-5 text-indigo-950 hover:bg-amber-100"
              >
                <h2 className="text-xl font-bold">{lesson.title}</h2>
                <p className="mt-1 text-indigo-700">{lesson.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      
      </div>
    </main>
  );
}

export default Lessons;