import { Navigate, Route, Routes, } from "react-router-dom";
import { UserProfile } from "../../auth/pages/users/UserProfile";
import { HomePage } from "../pages/HomePage";
import { DetailPlace } from "../pages/places/pages/DetailPlace";
import { EditPlace } from "../pages/places/pages/EditPlace";
import { RegisterPlace } from "../pages/places/pages/RegisterPlace";


export const DestinyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/place/register" element={<RegisterPlace/>} />
      <Route path="/place/detail/:id" element={<DetailPlace/>} />
      <Route path="/place/detail/:id/edit" element={<EditPlace/>} />
      <Route path="/profile" element={<UserProfile/>} />

      <Route path="/*" element={<Navigate to="/" />} />

    </Routes>
  );
};


