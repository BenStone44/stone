import { LatLngExpression } from "leaflet";

export interface singlePoint {
  id: number;
  radius: number;
  position: any;
}


export interface Line {
  points: number[];
}


export interface Points{
  points: singlePoint[];
}

