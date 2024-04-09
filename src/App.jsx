import "./styles/reset.scss";
import "./styles/global.scss";
import { Route, Routes } from "react-router-dom";
import BoardPage from "./pages/BoardPage/BoardPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  return (
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/" element={<LoginPage />} />
      <Route path="/board" element={<BoardPage />} />
    </Routes>
  );
}

export default App;
