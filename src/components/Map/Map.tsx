import { LatLngExpression } from "leaflet";
import L from 'leaflet';
import {Component} from 'react'
// import { singlePoint } from "../../store/models";
import store from "../../store";
// interface IProps {
// }

class Map extends Component{
  componentDidMount() {
    var mymap = L.map('root').setView([48.858222, 2.2945],13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 18
    }).addTo(mymap);

    const Ps = store.getState().points;
    for(let i=0;i<Ps.length;i++){
      let item = Ps[i];
      L.circle(item.position, {radius: item.radius}).addTo(mymap);
    }

  }
  componentWillUnmount() {}
  public render(){
    const defaultPosition: LatLngExpression = [48.864716, 2.349]; // Paris position
    return (
      <div>
      </div>
    );
  }

    


}

   
export default  Map;
