"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// අර අපි කතා කරපු Custom Icon එක
const createCustomIcon = (iconType: string, isSelected: boolean) => {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div style="
        display: flex; 
        align-items: center; 
        justify-content: center;
        width: 36px; 
        height: 36px; 
        background: ${isSelected ? "#023020" : "#F5F5DC"}; 
        color: ${isSelected ? "#F5F5DC" : "#023020"};
        border: 2px solid #023020; 
        border-radius: 50%; 
        box-shadow: 0 4px 6px rgba(0,0,0,0.2); 
        font-size: 18px;
        transition: all 0.3s ease;
      ">
        ${iconType}
      </div>
    `,
    iconSize: [36, 36],
    iconAnchor: [18, 18],
  });
};

export default function MapComponent({ properties, activeProperty, setActiveProperty }: any) {
  return (
    <MapContainer
      center={[7.8731, 80.7718]} // Sri Lanka Center
      zoom={7}
      style={{ height: "100%", width: "100%", zIndex: 0 }}
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://carto.com/">CARTO</a>'
      />
      {properties.map((property: any) => (
        <Marker
          key={property.id}
          position={[property.lat, property.lng]}
          icon={createCustomIcon(property.iconType, activeProperty?.id === property.id)}
          eventHandlers={{
            click: () => setActiveProperty(property),
          }}
        />
      ))}
    </MapContainer>
  );
}