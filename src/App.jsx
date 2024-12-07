import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import RedirectPage from "./RedirectPage";
import TestPage from "./TestPage";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Spoti-Auth" element={<TestPage />}/>
        <Route path="/Spoti-Auth/login" element={<Login />} />
        <Route path="/Spoti-Auth/redirect" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;