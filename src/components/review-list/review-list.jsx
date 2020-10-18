import React from 'react';
import Review from '../review/review';
import reviewProp from '../review/review.prop';
import PropTypes from 'prop-types';


const ReviewList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews.map((review) =>
        <Review
          key={review.id}
          review={review}
        />
      )}
    </ul>
  );
};


ReviewList.propTypes = PropTypes.arrayOf(reviewProp).isRequired;


export default ReviewList;
