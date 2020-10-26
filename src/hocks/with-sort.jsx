import React, {PureComponent} from 'react';
import Sort from '../components/sort/sort';


const withSort = (Component) => {
  class WithSort extends PureComponent {
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
      return (
        <Component
          {...this.props}
          isOpened={this.state.listOpened}
          onLabelClick={this._handleSortLabelClick}
        />
      );
    }
  }

  WithSort.propTypes = {};

  return WithSort;
};


export default withSort;
