import { HashRouter, Routes, Route } from "react-router-dom"; // 🚀 react-router-dom එකෙන් ගන්න
import App from "./App";
import { PhotoLocationsPage } from "./pages/PhotoLocationsPage";
import { PartnershipServicesPage } from "./pages/PartnershipServicesPage"; // 🚀 අලුත් පේජ් එක

export function Root() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/partnership-services" element={<PartnershipServicesPage />} /> {/* 🚀 මේක දැම්මා */}
        <Route path="/photo-locations" element={<PhotoLocationsPage />} />
      </Routes>
    </HashRouter>
  );
}