/* global google */

import React from 'react';

import {
  compose,
  withStateHandlers,
  lifecycle,
  renderComponent,
  branch,
} from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

const { GOOGLE_MAPS_API_KEY } = process.env;

const googleMapURL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;

const geocodePromise = ({ address, legend }) =>
  new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        resolve({
          position: results[0].geometry.location,
          legend,
          address,
        });
      } else {
        reject(
          new Error(
            `Geocode was not successful for the following reason: ${status}`,
          ),
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
    Promise.all(
      this.props.mapLocations.map(mapLocation => geocodePromise(mapLocation)),
    ).then(results => {
      this.props.setMarkers(results);
    });
  },
});

const handlers = withStateHandlers(
  () => ({
    isLoading: true,
    markers: [],
    openMarkerIndex: 0,
  }),
  {
    setMarkers: () => results => ({
      markers: results,
      isLoading: false,
    }),
    setOpenMarkerIndex: () => index => ({
      openMarkerIndex: index,
    }),
  },
);

const MapWithAMakredInfoWindow = compose(
  handlers,
  withScriptjs,
  withGoogleMap,
  withData,
  withSpinnerWhileLoading,
)(({ defaultZoom, markers, openMarkerIndex, setOpenMarkerIndex }) => (
  <GoogleMap
    defaultZoom={parseInt(defaultZoom, 10)}
    defaultCenter={markers[0].position}>
    {markers.map((marker, index) => (
      <Marker
        position={marker.position}
        onClick={() => setOpenMarkerIndex(index)}
        key={marker.legend}>
        {openMarkerIndex === index && (
          <InfoWindow
            onCloseClick={() => setOpenMarkerIndex(markers.length)}
            options={{ maxWidth: 200 }}>
            <div>
              <p>{marker.legend}</p>
              <p>{marker.address}</p>
            </div>
          </InfoWindow>
        )}
      </Marker>
    ))}
  </GoogleMap>
));

const Map = ({ mapLocations, defaultZoom }) => (
  <MapWithAMakredInfoWindow
    googleMapURL={googleMapURL}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `500px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    mapLocations={mapLocations}
    defaultZoom={defaultZoom}
  />
);

export default Map;
