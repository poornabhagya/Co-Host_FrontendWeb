import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import { PhotoLocationsPage } from "./pages/PhotoLocationsPage";

const basename = import.meta.env.BASE_URL || "/";

export function Root() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/photo-locations" element={<PhotoLocationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
