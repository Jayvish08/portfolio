import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Super from "./Super";
import Messages from "./messages"; // Import Messages component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Super />} />
        <Route path="/contacts" element={<Messages />} />
      </Routes>
    </Router>
  );
}

export default App;
