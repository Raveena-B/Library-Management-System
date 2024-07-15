import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Staff from "./Pages/Staff";
import Librarian from "./Pages/Librarian";
import MembershipCategory from "./Pages/MembershipCategory";
import OpeningHours from "./Pages/OpeningHours";
import Borrow from "./Pages/Borrow";
import Facilities from "./Pages/Facilities";
import Services from "./Pages/Services";
import UserGuides from "./Pages/UserGuides";
import FAQ from "./Pages/FAQ";
import VisionMision from "./Pages/VisionMision";
import History from "./Pages/History";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RulesRegulations from "./Pages/RulesRegulations";
import LibGallery from "./Pages/LibGallery";
import Login from "./Components/Login";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/librarian" element={<Librarian />} />
        <Route path="/membershipcategory" element={<MembershipCategory />} />
        <Route path="/openinghours" element={<OpeningHours />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/services" element={<Services />} />
        <Route path="/userguides" element={<UserGuides />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/vision" element={<VisionMision />} />
        <Route path="/history" element={<History />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/rulesregulations" element={<RulesRegulations />} />
        <Route path="/libgallery" element={<LibGallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
