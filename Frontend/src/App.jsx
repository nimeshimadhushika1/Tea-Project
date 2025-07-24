import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashbord.jsx";
import AddFarm from "./pages/Addfarm";
import AdminDashboard from "./pages/AdminDashboard";
import TeaVarietyDetail from "./pages/TeaVarieties";
import ActivityCalendar from "./pages/ActivityCalendar";
import TeaVar from "./pages/TeaVar";
import TeaDetail from './pages/TeaDetail';
import CropCare from './pages/CropCare';
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Journey from "./pages/Journey";
import CropCareDetail from './pages/CropCareDetail';
import AdminTeaVarities from "./pages/AdminTeaVarities";
import AdminAddTeaVariety from "./pages/AdminAddTeaVariety";
import ViewStateDetails from "./pages/ViewStateDetails";
import AdminCropCare from "./pages/AdminCropCare";

function App() {
  return (
   
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="add-farm" element={<AddFarm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/tea-variety-detail" element={<TeaVarietyDetail />} />
        <Route path="activity" element={<ActivityCalendar />} />
        <Route path="/tea-varieties" element={<TeaVar />} />
        <Route path="/teadetail" element={<TeaDetail />} />
        <Route path="/crop-care" element={<CropCare />} />
        <Route path="contact" element={<Contact />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="journey" element={<Journey />} />
        <Route path="/cropcaredetail" element={<CropCareDetail />} />
        <Route path="/adminteavar" element={<AdminTeaVarities />} />
        <Route path="/admin-add-tea-variety" element={<AdminAddTeaVariety />}/> 
        <Route path="/view-farm" element={<ViewStateDetails />} />
        <Route path="/admincrop-care" element={<AdminCropCare />} />

      </Route>
      
    </Routes>
  );
}

export default App;
