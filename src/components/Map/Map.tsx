import { useEffect, useState } from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Polyline,SVGOverlay } from "react-leaflet";
// import L from 'leaflet'
import { connect } from "react-redux";
import {Place,IState } from "../../store/models";
import "./Map.css";

const Map = ({
  places,
}: any) => {
  const defaultPosition: LatLngExpression = [48.864716, 2.349]; // Paris position
  const [polyLineProps, setPolyLineProps] = useState([]);
  const bounds:[number, number][] = [
    [48.85, 2.33],
    [48.84, 2.31],
  ]


  useEffect(() => {
    setPolyLineProps(places.reduce((prev: LatLngExpression[], curr: Place) => {
      prev.push(curr.position);
      return prev;
    }, []))
  }, [places]);


  return (
    <div className="map__container">
      <MapContainer
        center={defaultPosition}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "100vh" }}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Polyline图层 */}
        <Polyline positions={polyLineProps} />
        {/* SVG图层 */}
        <SVGOverlay attributes={{ stroke: 'red' }} bounds={bounds}>
        <rect x="0" y="0" width="100%" height="100%" fill="blue" />
        <circle r="5" cx="10" cy="10" fill="red" />
        <text x="50%" y="50%" stroke="white">
            text
        </text>
        </SVGOverlay>
      </MapContainer>
    </div>
  );
};

const mapStateToProps = (state: IState) => {
    const { places } = state;
    return {
      places: places.places,
    };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
  };
};     

export default connect(mapStateToProps, mapDispatchToProps)(Map);
