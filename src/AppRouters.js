import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import StudentFoarm from "./pages/StudentFoarm";
import { Calculator } from "./pages/Calculator";


const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnMore" element={<LearnMore />} />
        <Route path="/studentFoarm" element={<StudentFoarm />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
  );
};
export default AppRoutes;
