import * as React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import usePlacesAutocomplete, { getGeocode, getLatLng, LatLng } from 'use-places-autocomplete';
import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox';

const PlacesAutocomplete = ({ setSelected, map }: { setSelected: React.Dispatch<React.SetStateAction<LatLng | null>>, map: google.maps.Map | null }) => {
  const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = getLatLng(results[0]);
    setSelected({ lat, lng });
    map?.panTo({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready} className='combobox-input'
        placeholder='Search and Address'
      />
      <ComboboxPopover>
        <ComboboxList className='combobox-list'>
          {status === 'OK' && data.map(({ place_id, description }) => (
            <ComboboxOption 
              key={place_id}
              value={description}
              className='combobox-option'
            />
          ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  )
}

const Home = () => {
  const center = React.useMemo(() => ({ lat: 35.681382, lng: 139.766084 }), []);
  const [selected, setSelected] = React.useState<LatLng | null>(null);
  const [map, setMap] = React.useState<google.maps.Map | null>(null);

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY} libraries={['places']}>
      <div className='places-container'>
        <PlacesAutocomplete setSelected={setSelected} map={map} />
      </div>
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerClassName='map-container'
        onLoad={(map) => setMap(map)}
      >
        {selected && <Marker position={selected} />}
      </GoogleMap>
    </LoadScript>
  )
}

export default Home;
