import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import offersProp from '../offer-list/offers.prop';
import 'leaflet/dist/leaflet.css';


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
  }

  componentDidMount() {
    const {offers} = this.props;
    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.map((offer) => {
      leaflet
        .marker(offer.coords, {icon})
        .addTo(map);
    });
  }

  render() {
    const {className} = this.props;

    return (
      <section className={`${className}__map map`}>
        <div
          ref={this.mapRef}
          style={{width: `100%`, height: `100%`}}
        />
      </section>
    );
  }
}


Map.propTypes = {
  offers: offersProp,
};


export default Map;
