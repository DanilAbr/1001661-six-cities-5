import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {changeSort, sortOffers} from '../../store/action';
import {SortLabel} from '../../utils/const';
import {getSortType} from '../../store/reducers/app-state/selectors';


const Sort = ({onSortClick, sortType, isOpened, onLabelClick}) => {
  const sortTypes = Object.keys(SortLabel);
  const sortLabels = Object.values(SortLabel);
  const listClassName =
    `places__options places__options--custom${isOpened ? ` places__options--opened` : ``}`;

  return (
    <form
      className="places__sorting"
      action="#" method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={onLabelClick}
        className="places__sorting-type"
        tabIndex="0"
      >
        {SortLabel[sortType]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className={listClassName}>
        {sortTypes.map((type, index) => (
          <li
            key={`${sortType}-${index}`}
            className="places__option"
            data-sorttype={sortTypes[index]}
            tabIndex="0"
            onClick={(evt) => {
              onSortClick(evt.target.dataset.sorttype);
              onLabelClick();
            }}
          >
            {sortLabels[index]}
          </li>
        ))}
      </ul>
      {/* <select className="places__sorting-type" id="places-sorting">
              <option className="places__option" value="popular" selected="">Popular</option>
              <option className="places__option" value="to-high">Price: low to high</option>
              <option className="places__option" value="to-low">Price: high to low</option>
              <option className="places__option" value="top-rated">Top rated first</option>
            </select> */}
    </form>
  );
};


Sort.propTypes = {
  onSortClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onLabelClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  sortType: getSortType(state),
});


const mapDispatchToProps = (dispatch) => ({
  onSortClick: (sortType) => {
    dispatch(changeSort(sortType));
    dispatch(sortOffers(sortType));
  },
});


export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
