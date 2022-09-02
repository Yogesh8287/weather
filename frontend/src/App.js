import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/user";
import Home from "./components/home";
import Signin from "./components/signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="signin" element={<Signin />} />
          <Route path="/" element={<User />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
