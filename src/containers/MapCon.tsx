import Map from '../components/Map/Map'
import { Dispatch, bindActionCreators } from "redux";
import {connect} from 'react-redux'
import { singlePoint } from "..//store/models";

const mapStateToProps = (state: Array<singlePoint>) => {
    return {
      points: state,
    };
  };

  const mapDispatchToProps = (dispatch: any) => {
    return {
    };
  };


const MapCon = connect(mapStateToProps, mapDispatchToProps)(Map);
export default  MapCon;