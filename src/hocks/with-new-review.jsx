import React, {PureComponent} from 'react';


const withNewReview = (Component) => {
  class WithNewReview extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        textValue: ``,
        ratingValue: ``
      };

      this._handleTextChange = this._handleTextChange.bind(this);
      this._handleRatingCheck = this._handleRatingCheck.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleTextChange(evt) {
      this.setState({
        textValue: evt.target.value
      });
    }

    _handleRatingCheck(evt) {
      this.setState({
        ratingValue: evt.target.value
      });
    }

    _handleSubmit(evt) {
      evt.preventDefault();
    }

    render() {
      return (
        <Component
          onFormSubmit={this._handleSubmit}
          onRatingCheck={this._handleRatingCheck}
          onTextChange={this._handleTextChange}
        />
      );
    }
  }

  WithNewReview.propTypes = {};

  return WithNewReview;
};


export default withNewReview;
