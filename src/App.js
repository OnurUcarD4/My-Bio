import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Views from "views/app-views";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Views />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
