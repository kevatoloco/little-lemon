import "./App.css";
import Home from "./Home";
import BookingPage from "./BookingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/bookingpage" element={<BookingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
