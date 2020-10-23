import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {SortLabel} from '../../utils/const';

class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      listOpened: false,
    };

    this._handleSortLabelClick = this._handleSortLabelClick.bind(this);
  }

  _handleSortLabelClick() {
    this.setState({
      listOpened: !this.state.listOpened,
    });
  }

  render() {
    const {onSortClick, sortType} = this.props;

    const sortTypes = Object.keys(SortLabel);
    const sortLabels = Object.values(SortLabel);
    const listClassName =
      `places__options places__options--custom${this.state.listOpened ? ` places__options--opened` : ``}`;

    return (
      <form
        className="places__sorting"
        action="#" method="get"
      >
        <span className="places__sorting-caption">Sort by</span>
        <span
          onClick={this._handleSortLabelClick}
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
                this._handleSortLabelClick();
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
  }
}


Sort.propTypes = {
  onSortClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  sortType: state.sortType
});


const mapDispatchToProps = (dispatch) => ({
  onSortClick: (sortType) => {
    dispatch(ActionCreator.changeSort(sortType));
    dispatch(ActionCreator.sortOffers(sortType));
  }});


export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
