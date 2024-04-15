import { BrowserRouter, Route, Routes } from "react-router-dom";

import ContactUs from "./pages/ContactUs/ContactUs";
import HomePage from "./pages/HomePage/HomePage";
import AboutUs from "./pages/AboutUs/AboutUs";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="/aboutus" element={<AboutUs />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
