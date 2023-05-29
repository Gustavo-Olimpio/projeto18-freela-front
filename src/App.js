import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupStudents from './pages/SignupStudents'
import StudentsList from './pages/StudentsList'
import ProfilesStudents from './pages/ProfilesStudents'
import ProjectsList from './pages/ProjectsList'
import ProjectsDelivery from './pages/ProjectsDelivery'
function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupStudents />} />
          <Route path="/Students" element={<StudentsList />} />
          <Route path="/Profiles/:id" element={<ProfilesStudents />} />
          <Route path="/Projects" element={<ProjectsList />} />
          <Route path="/Delivery" element={<ProjectsDelivery />} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
