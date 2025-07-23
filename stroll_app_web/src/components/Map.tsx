import { APIProvider, Map } from '@vis.gl/react-google-maps';

const MapComponent = () => {
  const position = { lat: 35.681236, lng: 139.767125 }; // 東京駅の緯度経度

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
        <Map center={position} zoom={15} />
      </APIProvider>
    </div>
  );
};

export default MapComponent;
