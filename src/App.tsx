import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import ResumePage from "./pages/ResumePage";
import ProjectsPage from "./pages/ProjectsPage";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
      <>
        <NavBar></NavBar>
        <Routes>
            <Route path='/portfolio/' element={<HomePage />}></Route>
            <Route path="/portfolio/resume" element={<ResumePage />}></Route>
            <Route path="/portfolio/projects" element={<ProjectsPage />}></Route>
        </Routes>
      </>
    )
}

export default App
