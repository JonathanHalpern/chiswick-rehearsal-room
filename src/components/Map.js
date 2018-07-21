import React from 'react';

const {
  compose,
  withStateHandlers,
  lifecycle,
  renderComponent,
  branch,
} = require('recompose');
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require('react-google-maps');

const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;

const DEFAULT_ZOOM = 16;

const addresses = [
  'Maggie and Rose Nursery, 1 Essex Place Square, London W4 5UJ',
  'The Chiswick Rehearsal Room, Ground Floor, Wellington Place, Dolman Road, London W4 5PS',
];

const geocodePromise = address =>
  new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        console.log(results);
        resolve(results[0].geometry.location);
      } else {
        reject(
          `Geocode was not successful for the following reason: ${status}`,
        );
      }
    });
  });

const Spinner = () => (
  <div className="Spinner">
    <div className="loader">Loading...</div>
  </div>
);

const isLoading = ({ isLoading }) => isLoading;

const withSpinnerWhileLoading = branch(isLoading, renderComponent(Spinner));

const withData = lifecycle({
  componentWillMount() {
    Promise.all(addresses.map(address => geocodePromise(address))).then(
      results => {
        this.props.setMarkers(results);
      },
    );
  },
});

const handlers = withStateHandlers(
  () => ({
    isOpen: false,
    isLoading: true,
    markers: [],
  }),
  {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen,
    }),
    setMarkers: () => results => ({
      markers: results,
      isLoading: false,
    }),
  },
);

const MapWithAMakredInfoWindow = compose(
  handlers,
  withScriptjs,
  withGoogleMap,
  withData,
  withSpinnerWhileLoading,
)(({ markers, onToggleOpen, isOpen }) => (
  <GoogleMap defaultZoom={DEFAULT_ZOOM} defaultCenter={markers[0]}>
    {markers.map(marker => (
      <Marker position={marker} onClick={onToggleOpen}>
        {isOpen && (
          <InfoWindow onCloseClick={onToggleOpen}>
            <p>Hy</p>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

const Map = () => (
  <MapWithAMakredInfoWindow
    googleMapURL={googleMapURL}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `500px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
);

export default Map;
