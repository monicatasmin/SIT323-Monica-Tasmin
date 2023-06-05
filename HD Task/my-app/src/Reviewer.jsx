import React from 'react';

class Reviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      review: '',
    };
  }

  handleReviewChange = (event) => {
    this.setState({ review: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onReviewSubmit(this.state.review);
    this.setState({ review: '' });
  };

  render() {
    return (
      <div className="container mt-5">
        <h2>Reviewer</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <textarea
              className="form-control"
              value={this.state.review}
              onChange={this.handleReviewChange}
              placeholder="Write your review here"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary"style={{margin:"10px"}}>Submit Review</button>
        </form>
      </div>
    );
  }
}

export default Reviewer;
