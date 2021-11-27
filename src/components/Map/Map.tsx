import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Polyline,SVGOverlay,Circle } from "react-leaflet";
import {Component} from 'react'
import { singlePoint } from "../../store/models";
import store from "../../store";
interface IProps {
  points: singlePoint[];
}

class Map extends Component<IProps>{
  componentDidMount() {
    console.log(store.getState());
  }
  componentWillUnmount() {}
  public render(){
    const {points} = this.props;
    const defaultPosition: LatLngExpression = [48.864716, 2.349]; // Paris position
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
          {/* <div>
          {points.map((value, index) => (
              <Circle center={value.position} pathOptions={{ fillColor: 'blue' }} radius={value.radius} /> 
            ))}
          </div> */}
          <Circle center={[48.858222, 2.2945]} pathOptions={{ fillColor: 'blue' }} radius={200} />
        </MapContainer>
      </div>
    );
  }

  


}

   
export default  Map;
