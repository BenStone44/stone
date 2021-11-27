import L from 'leaflet'
import { Component } from 'react'
import store from '../../store'
// interface IProps {
// }

class Map extends Component {
  componentDidMount () {
    const mymap = L.map('root').setView([48.858222, 2.2945], 13)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(mymap)

    const Ps = store.getState().points
    for (let i = 0; i < Ps.length; i++) {
      const item = Ps[i]
      L.circle(item.position, { radius: item.radius }).addTo(mymap)
    }
  }

  componentWillUnmount () {}
  public render () {
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <div></div>
    )
  }
}

export default Map
