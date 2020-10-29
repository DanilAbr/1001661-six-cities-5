import PropTypes from 'prop-types';


export default PropTypes.shape({
  city: PropTypes.object.isRequired,
  images: PropTypes.arrayOf(PropTypes.string.isRequired),
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isPremium: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  insideItems: PropTypes.arrayOf(PropTypes.string.isRequired),
  price: PropTypes.number.isRequired,
  host: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isPro: PropTypes.bool.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
}).isRequired;
