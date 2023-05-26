import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Router>
        <Modal/>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home/>}/>
          <Route path="/portfolio" />
          <Route path="/profile" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
