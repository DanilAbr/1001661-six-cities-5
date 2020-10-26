import React, {PureComponent} from 'react';


const withOfferList = (Component) => {
  class WithOfferList extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {activeOffer: null};

      this._handleOfferHover = this._handleOfferHover.bind(this);
    }

    _handleOfferHover(id) {
      this.setState({activeOffer: id});
    }

    render() {
      return (
        <Component
          {...this.props}
          onOfferHover={this._handleOfferHover}
        />
      );
    }
  }

  WithOfferList.propTypes = {};

  return WithOfferList;
};


export default withOfferList;
