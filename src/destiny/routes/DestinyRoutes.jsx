import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { DetailPlace } from "../pages/places/DetailPlace";
import { RegisterPlace } from "../pages/places/RegisterPlace";

export const DestinyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/place/register" element={<RegisterPlace/>} />
      <Route path="/place/detail" element={<DetailPlace/>} />

      <Route path="/*" element={<Navigate to="/" />} />

    </Routes>
  );
};
