import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import PriceOffer from "./pages/PriceOffer";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home email={email} password={password} setEmail={setEmail} setPassword={setPassword} token={localStorage.token}  userId={localStorage.userId}/>} />
          <Route path="/price-offer" element={localStorage.token ? <PriceOffer /> : <Navigate replace to={"/"} />} />
          <Route
            path="/dashboard"
            element={localStorage.token ? <DashboardPage /> : <Navigate replace to={"/"} />}
          />
       </Routes>
      </Router>
  );
}

export default App;
