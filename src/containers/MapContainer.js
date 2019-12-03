import React, { Component } from "react";
import { GoogleMap, Marker, InfoWindow } from "react-google-maps";

const fitBounds = (map, data) => {
  const bounds = new window.google.maps.LatLngBounds();
  data.map(resort => {
    let pos = {
      lat: parseFloat(resort.attributes.latitude),
      lng: parseFloat(resort.attributes.longitude)
    };
    bounds.extend(pos);
    return resort.id;
  });
  map.fitBounds(bounds);
};

export default class MapContainer extends Component {
  render() {
    const { data } = this.props;
    const { latitude, longitude } = data[0].attributes;
    return (
      <GoogleMap
        defaultCenter={{
          lat: parseFloat(latitude),
          lng: parseFloat(longitude)
        }}
        defaultZoom={7}
        yesIWantToUseGoogleMapApiInternals={true}
        ref={map => {
          fitBounds(map, data);
        }}
        // defaultOptions={{ styles: MapStyles }}
      >
        {data.map(resort => (
          <Marker
            className="marker-style"
            key={resort.id}
            animation={window.google.maps.Animation.DROP}
            position={{
              lat: parseFloat(resort.attributes.latitude),
              lng: parseFloat(resort.attributes.longitude)
            }}
            icon={{
              style: {
                borderStyle: "solid",
                borderWidth: "10px",
                borderColor: "black"
              },
              url: resort.attributes.icon,
              scaledSize: new window.google.maps.Size(40, 40)
            }}
            style={{
              borderStyle: "solid",
              borderRadius: "4px",
              borderColor: "black",
              borderWidth: "10"
            }}
          />
        ))}
        {/* {this.state.selectedResort && (
          <InfoWindow
            position={{
              lat: parseFloat(this.state.selectedResort.attributes.latitude),
              lng: parseFloat(this.state.selectedResort.attributes.longitude)
            }}
            onCloseClick={() => {
              this.setState({
                selectedResort: null
              });
            }}
          >
            <div className="map-font">
              <h5>{this.state.selectedResort.attributes.name}</h5>
            </div>
          </InfoWindow>
        )} */}
      </GoogleMap>
    );
  }
}