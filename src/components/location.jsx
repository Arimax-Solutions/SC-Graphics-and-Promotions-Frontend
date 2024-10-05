import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const LocationMap = () => {
  const position = [6.827698002781762, 79.95603536077563]; // Your location coordinates

  const icon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="h-96 w-full">
      <MapContainer center={position} zoom={15} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={icon}>
          <Popup>
            <div>
              <p>178/A, Palanwatta, Pannipitiya, Colombo, Sri Lanka 10230</p>
              {/* Button for Google Maps Directions */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                  Get Directions
                </button>
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationMap;
