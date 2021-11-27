  import { Points } from "../models";
  import { pointData } from "../../data";
  import { LatLngExpression } from "leaflet";
  
  const initialState: Points = {
    points: pointData,
  };
  
  const productsReducer = (
    state: Points = initialState,
    action: { type: string; payload: any }
  ): Points => {
    switch (action.type) {
    //   case SET_ALL_PLACES: {
    //     return { ...state, places: action.payload };
    //   }
    //   case SET_SELECTED_PLACE: {
    //     return { ...state, selectedPlace: action.payload };
    //   }
    //   case SET_PLACE_PREVIEW_VISIBILITY: {
    //     return { ...state, placePreviewsIsVisible: action.payload };
    //   }
    //   case SET_PLACE_FORM_VISIBILITY: {
    //     return { ...state, placeFormIsVisible: action.payload };
    //   }
    //   case SET_PRE_PLACE_LOCATION: {
    //     return { ...state, prePlacePosition: action.payload };
    //   }
    //   case ADD_NEW_PLACE: {
    //     return { ...state, places: [...state.places, action.payload] };
    //   }
      default: {
        return state;
      }
    }
  };
  
  export default productsReducer;
  
