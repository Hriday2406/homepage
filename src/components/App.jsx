import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Resume from "./Resume";

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/homepage">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
