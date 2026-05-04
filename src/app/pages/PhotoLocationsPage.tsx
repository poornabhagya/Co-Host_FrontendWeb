import { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { PhotoLocations } from "../components/PhotoLocations";
import { Contact } from "../components/Contact";

export function PhotoLocationsPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <Navigation />
      <PhotoLocations />
      <Contact />
    </div>
  );
}
