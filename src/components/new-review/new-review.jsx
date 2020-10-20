import React, {PureComponent, Fragment} from 'react';


class NewReview extends PureComponent {
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
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={this._handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div
          className="reviews__rating-form form__rating"
          onChange={this._handleRatingCheck}
        >
          {[5, 4, 3, 2, 1].map((item, index) => (
            <Fragment key={index}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={item}
                id={`${item}-stars`}
                type="radio"
              />
              <label htmlFor={`${item}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"/>
                </svg>
              </label>
            </Fragment>
          ))}
        </div>
        <textarea
          onChange={this._handleTextChange}
          className="reviews__textarea form__textarea"
          id="review" name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
        >
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and
            describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }
}


export default NewReview;
