import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';


const Sort = ({onSortClick}) => {

  return (
    <form
      onClick={(evt) => {
        onSortClick(evt.target.dataset.type);
      }}
      className="places__sorting"
      action="#" method="get"
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" data-type="popular" tabIndex="0">Popular</li>
        <li className="places__option" data-type="low" tabIndex="0">Price: low to high</li>
        <li className="places__option" data-type="high" tabIndex="0">Price: high to low</li>
        <li className="places__option" data-type="rated" tabIndex="0">Top rated first</li>
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


const mapDispatchToProps = (dispatch) => ({
  onSortClick: (sortType) => {
    dispatch(ActionCreator.changeSort(sortType));
    dispatch(ActionCreator.sortOffers(sortType));
  }});


export {Sort};
export default connect(null, mapDispatchToProps)(Sort);
