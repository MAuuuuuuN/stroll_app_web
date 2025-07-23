import { APIProvider, Map } from "@vis.gl/react-google-maps";
import type { MapCameraChangedEvent } from '@vis.gl/react-google-maps';

interface MapComponentProps {
  cameraState: { center: { lat: number; lng: number; }; zoom: number; };
  handleCameraChange: (ev: MapCameraChangedEvent) => void;
}

const MapComponent = ({ cameraState, handleCameraChange }: MapComponentProps) => {
  return (
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map
          center={cameraState.center}
          zoom={cameraState.zoom}
          onCameraChanged={handleCameraChange}
          gestureHandling={"greedy"}
          zoomControl={true}
          scrollwheel={true}
          mapTypeControl={false}
        />
      </APIProvider>
    </div>
  );
};

export default MapComponent;
