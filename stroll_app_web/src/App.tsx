import { useState, useCallback } from 'react';
import MapComponent from './components/Map';
import Menu from './components/Menu';
import type { MapCameraChangedEvent } from '@vis.gl/react-google-maps';

function App() {
  const position = { lat: 35.681236, lng: 139.767125 }; // 東京駅の緯度経度
  const [cameraState, setCameraState] = useState({ center: position, zoom: 16 });

  const handleCameraChange = useCallback((ev: MapCameraChangedEvent) => {
    setCameraState(ev.detail);
  }, []);

  const resetMap = useCallback(() => {
    setCameraState({ center: position, zoom: 16 });
  }, [position]);

  return (
    <>
      <MapComponent 
        cameraState={cameraState} 
        handleCameraChange={handleCameraChange} 
      />
      <Menu resetMap={resetMap} />
    </>
  );
}

export default App;