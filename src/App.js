import Login from "./Pages/Login";
import Feeds from "./Pages/Feeds";
import Profile from "./Pages/Profile";
import Admin_view from "./Pages/Admin_view";
import Self_profile from "./Pages/Self_profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";



function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}>
          </Route>
          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/Feeds" element={<Feeds/>}>
          </Route>
          <Route path="/Admin_view" element={<Admin_view/>}>
          </Route>
          <Route path="/Profile" element={<Profile/>}>
            </Route>
          <Route path="/Self_Profile" element={<Self_profile/>}>
          </Route>
          <Route path="/*" element={<Login/>}>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
