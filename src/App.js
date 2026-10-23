import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Lessons from "./components/lessons"
import QuizJs from   "./components/quiz-docker";
import QuizDocker from   "./components/quiz-javascript";

import Profile from "./components/profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/lessons" element={<Lessons/>} />
        <Route path="/quiz-javascript" element={<QuizJs />} />
        <Route path="/quiz-docker" element={<QuizDocker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
