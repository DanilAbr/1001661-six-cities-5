import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import offersProp from '../offer-list/offers.prop';
import 'leaflet/dist/leaflet.css';


class Map extends PureComponent {
  constructor(props) {
    super(props);

    this.mapRef = React.createRef();
    this.map = null;
    this.zoom = 11;
    this.city = [52.38333, 4.9];
    this.markers = [];
  }

  componentDidMount() {
    this.map = leaflet.map(this.mapRef.current, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(this.city, this.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this._renderMarkers();
  }

  _renderMarkers() {
    const {offers} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    offers.map((offer) => {
      this.markers.push(
          leaflet
            .marker(offer.coords, {icon})
            .addTo(this.map)
      );
    });
  }

  componentDidUpdate() {
    this.markers.map((marker) => this.map.removeLayer(marker));
    this._renderMarkers();
  }

  render() {
    const {className} = this.props;

    return (
      <section className={`${className}__map map`}>
        <div
          ref={this.mapRef}
          style={{height: `100%`}}
        />
      </section>
    );
  }
}


Map.propTypes = {
  offers: offersProp,
  className: PropTypes.string.isRequired,
};


export default Map;
