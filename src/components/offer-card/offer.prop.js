import PropTypes from 'prop-types';


export default PropTypes.shape({
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bedroomsCount: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  insideItems: PropTypes.arrayOf(PropTypes.string.isRequired),
  price: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isSuper: PropTypes.bool.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
}).isRequired;
