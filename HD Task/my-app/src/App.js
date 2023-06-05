import React from 'react';
import TopNav from './TopNav';
import Home from './Home';
import ReviewAudiences from './ReviewAudiences';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  handleReviewSubmit = async (review) => {
    try {
      const response = await axios.post('http://localhost:3001/comment', review);
      const savedReview = response.data;

      this.setState((prevState) => ({
        reviews: [...prevState.reviews, savedReview],
      }));
    } catch (error) {
      console.error('Failed to save review:', error);
    }
  };

  render() {
    const { reviews } = this.state;

    return (
      <div>
        <TopNav />
        <Home />
        <ReviewAudiences reviews={reviews} handleReviewSubmit={this.handleReviewSubmit} />
      </div>
    );
  }
}

export default App;
