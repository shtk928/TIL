import * as React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Home = () => {
  const center = React.useMemo(() => ({ lat: 35.681382, lng: 139.766084 }), []);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}>
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName='map-container'
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default Home;