import "./styles/App.css";
import { Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import GiftCode from "./components/GiftCode";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/giftcode/:id" element={<GiftCode />} />
      </Routes>
    </div>
  );
};

export default App;
