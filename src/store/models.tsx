import { LatLngExpression } from "leaflet";

export interface PlaceState {
  places: Place[];
}


export interface Place {
  position: LatLngExpression;
}


export interface IState {
  places: PlaceState;
}