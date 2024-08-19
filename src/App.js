import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Aboutus from "./pages/aboutus";
import Requestsample from "./pages/requestsample";
import Equipment from "./pages/equipment";
import Reviews from "./pages/reviews";
import Reorder from "./pages/reorder";
import Contactus from "./pages/contactus";

import Header from "./components/Header";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Header index={1} />}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/company/" element={<Aboutus />} /> 
        <Route path="/requests-sample-pack" element={<Requestsample />} /> 
        <Route path="/company/our-equipment" element={<Equipment />} /> 
        <Route path="/testimonials" element={<Reviews />} /> 
        <Route path="/sign-in" element={<Reorder />} /> 
        <Route path="/contact" element={<Contactus />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
