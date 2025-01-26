import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
      <>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/resume" element={<ResumePage />}></Route>
            <Route path="/projects" element={<ProjectsPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </>
    )
}

export default App
