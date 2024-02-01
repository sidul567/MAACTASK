import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Registration from "./components/Auth/Registration";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomeRoute from "./components/Route/HomeRoute";
import Region from "./components/RegionArea/Region";
import Area from "./components/RegionArea/Area";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import CreateRegion from "./components/RegionArea/CreateRegion";
import CreateArea from "./components/RegionArea/CreateArea";
import 'react-toastify/dist/ReactToastify.css';
import Toaster from "./components/Toaster/Toaster";

function App() {
  return (
    <Router>
      <Toaster />
      <Routes>
        <Route exact path="/" element={<HomeRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registration" element={<Registration />} />
        </Route>
        <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="region" element={<Region />} />
            <Route exact path="area" element={<Area />} />
            <Route exact path="createRegion" element={<CreateRegion />} />
            <Route exact path="createArea" element={<CreateArea />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
