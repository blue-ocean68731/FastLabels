import {BrowserRouter, Route, Routes} from "react-router-dom";
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
    <div className="App header-background">
      <BrowserRouter>
        <Header />
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
      </BrowserRouter>

    </div>
  );
}

export default App;
