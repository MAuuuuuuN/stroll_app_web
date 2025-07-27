import { useState, useCallback, useEffect } from 'react';
import MapComponent from './components/Map';
import Menu from './components/Menu';
import type { MapCameraChangedEvent } from '@vis.gl/react-google-maps';

const TOKYO_STATION = { lat: 35.681236, lng: 139.767125 }; // 東京駅の緯度経度

function App() {
  const [cameraState, setCameraState] = useState({ center: TOKYO_STATION, zoom: 16 });
  const [currentPosition, setCurrentPosition] = useState<{lat: number; lng: number}>(TOKYO_STATION);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const currentLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCameraState({ center: currentLocation, zoom: 16 });
          setCurrentPosition(currentLocation);
        },
        (error) => {
          console.error("Error getting user's location: ", error);
          // 位置情報取得に失敗した場合、東京駅を中心に表示
          setCameraState({ center: TOKYO_STATION, zoom: 16 });
        }
      );
    }
  }, []);

  const handleCameraChange = useCallback((ev: MapCameraChangedEvent) => {
    setCameraState(ev.detail);
  }, []);

  const resetMap = useCallback(() => {
    // resetMapは現在地に戻す
    setCameraState({ center: currentPosition, zoom: 16 });
  }, [currentPosition]);

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