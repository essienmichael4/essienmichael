import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

function App() {

  return (
    <>
      <Routes>
        <Route path="/essienmichael" element={<Home />} />
        <Route path="/essienmichael/projects/:name" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
