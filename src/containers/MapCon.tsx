import Map from '../components/Map/Map'
import { Dispatch, bindActionCreators } from "redux";
import {connect} from 'react-redux'
import { Points } from "..//store/models";

const mapStateToProps = (state: Points) => {
  const {points} = state;
    return {
      points: points,
    };
  };

  const mapDispatchToProps = (dispatch: any) => {
    return {
    };
  };


const MapCon = connect(mapStateToProps, mapDispatchToProps)(Map);
export default  MapCon;