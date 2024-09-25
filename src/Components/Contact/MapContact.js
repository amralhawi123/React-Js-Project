import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapContact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div className="map-contact">
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}>
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
        <div class="row contact">
          <div class="col-lg-4">
            <div class="info-item">
              <i class="fa fa-envelope"></i>
              <h4>Email Address</h4>
              <a href="#">info@company.com</a>
            </div>
          </div>
          <div class="col-lg-4 ">
            <div class="info-item">
              <i class="fa fa-phone"></i>
              <h4>Phone Number</h4>
              <a href="#">010-020-0340</a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="info-item">
              <i class="fa fa-map-marked-alt"></i>
              <h4>Address</h4>
              <a href="#">Victoria, Australia</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapContact;
