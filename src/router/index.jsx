import { Routes, Route } from "react-router-dom";
import Tom from "../pages/User/Tom";
import TeamOne from "./../pages/Team/TeamOne/TeamOne";
import TeamTwo from "./../pages/Team/TeamTwo/TeamTwo";
import FireWall from "../pages/Firewall/FireWall";
import Files from "./../pages/Files/Files";
import HostDevices from "../pages/HostDevices/HostDevices";
import DeviceFullInfo from "../pages/HostDevices/DeviceFull";
import AgentLogs from "../pages/Logs/Logs";
import Applications from "../pages/Applications/Applications";
import ApplicationConnections from "../pages/HostDevices/ApplicationConnections";

function Router() {
  return (
    <Routes>
      <Route path="/user/:id" element={<Tom />} />
      <Route path="/firewall" element={<FireWall />} />
      <Route path="/devices" element={<HostDevices />} />
      <Route path="/devices/:id" element={<DeviceFullInfo />} />
      <Route path="/connections/:id" element={<ApplicationConnections />} />
      <Route path="/logs" element={<AgentLogs />} />
      <Route path="/applications" element={<Applications />} />
      <Route path="/TeamOne" element={<TeamOne />} />
      <Route path="/TeamTwo" element={<TeamTwo />} />
      <Route path="/Files" element={<Files />} />
    </Routes>
  );
}

export default Router;
