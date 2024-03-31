import { BrowserRouter, Route, Routes } from "react-router-dom";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Job from "./pages/Job";
import Signup from "./pages/Signup";
import ResumeBuilder from "./pages/ResumeBuilder";
import Result from "./pages/Result";
import { Interview } from "./pages/Interview";
import { InterviewProvider } from "./interviewContext";
import { PreInterview1 } from "./pages/PreInterview";
import Company from "./pages/Company";

function App() {
  return (
    <InterviewProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<ResumeBuilder />} />
          <Route path="/results" element={<Result />} />
          <Route path="/preinterview" element={<PreInterview1 />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<Job />} />
          <Route path="/company/:id" element={<Company />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </InterviewProvider>
  );
}

export default App;
