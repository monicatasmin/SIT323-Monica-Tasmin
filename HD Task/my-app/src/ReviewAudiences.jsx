import React from 'react';
import './App.css';
import TopNav from './TopNav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      newReview: '',
      comments: [
        {
          email: 'example1@example.com',
          status: 'Former Tenant',
          comment: 'This is a great place to live!',
          reviewIndex: 0,
        },
        {
          email: 'example2@example.com',
          status: 'Current Tenant',
          comment: 'I had a good experience here.',
          reviewIndex: 1,
        },
      ],
      listings: [
        {
          image: 'https://i2.au.reastatic.net/800x600-format=webp/834c6299504b1fa49683d16ec8aad29a115b2c914e5e4f2922e6ec46d0981075/image.jpg',
          address: '1105/442 Elizabeth Street, Melbourne, VIC 3000',
          type: 'Apartment',
        },
        {
          image: 'https://i2.au.reastatic.net/800x600-format=webp/41f681b4e16b15fab09fe9feca04ea93b0f275a9168f1e1157980f4ffa83da95/image.jpg',
          address: '163 Albert Street, Port Melbourne, VIC 3207',
          type: 'Sharehouse',
        },
        {
          image: 'https://i2.au.reastatic.net/1096x744-resize,extend,r=33,g=40,b=46/166b0483a7db77277c3cadea57848c2c2f8818855c18492941361ee549437b6b/image.jpg',
          address: '108/593 Elizabeth Street, Melbourne, VIC 3000',
          type: 'Student Accommodation',
        },
        {
          image: 'https://rimh2.domainstatic.com.au/aH6HJjyAQp7HNbgOUwXfSPeT4No=/fit-in/1920x1080/filters:format(jpeg):quality(80):no_upscale()/12893367_1_1_190131_013624-w800-h600',
          address: '411/51 Gordon Street, Footscray, VIC 3011',
          type: 'Apartment',
        },
      ],
      userEmail: '',
      userStatus: '',
      filterType: 'All',
    };
  }

  handleReviewInputChange = (event) => {
    this.setState({ newReview: event.target.value });
  };

  handleCommentInputChange = (event) => {
    this.setState({ newComment: event.target.value });
  };

  handleFormSubmit = (event, index) => {
    event.preventDefault();
    const { newReview, newComment, userEmail, userStatus, reviews, comments } = this.state;

    if (newReview.trim() !== '' && newComment.trim() !== '') {
      const updatedReviews = [...reviews];
      const newCommentObj = {
        email: userEmail,
        status: userStatus,
        comment: newComment,
        reviewIndex: index, 
      };

      updatedReviews[index] = newReview;

      this.setState({
        reviews: updatedReviews,
        comments: [...comments, newCommentObj],
        newReview: '',
        newComment: '',
      });
    }
  };

  handleEmailInputChange = (event) => {
    this.setState({ userEmail: event.target.value });
  };

  handleStatusInputChange = (event) => {
    this.setState({ userStatus: event.target.value });
  };

  handleFilterTypeChange = (event) => {
    this.setState({ filterType: event.target.value });
  };

  render() {
    const { listings, reviews, newReview, comments, newComment, userEmail, userStatus, filterType } = this.state;

    const filteredListings = filterType === 'All' ? listings : listings.filter((listing) => listing.type === filterType);

    return (
      <div className="container mt-5">
        <h2 className="text-center">Reviews</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <select className="form-control" value={filterType} onChange={this.handleFilterTypeChange}>
              <option value="All">All</option>
              <option value="Apartment">Apartment</option>
              <option value="Sharehouse">Sharehouse</option>
              <option value="Student Accommodation">Student Accommodation</option>
            </select>
          </div>
        </div>
        <br />
        <div className="row justify-content-center">
          {filteredListings.map((listing, index) => {
            const listingReviews = reviews[index] ? comments.filter((comment) => comment.reviewIndex === index) : [];

            return (
              <div key={index} className="col-md-6 mb-4">
                <div className="card">
                  <img src={listing.image} className="card-img-top" style={{ height: 400 }} alt="Listing" />
                  <div className="card-body">
                    <h5 className="card-title">
                      <a>Address: </a>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {listing.address}
                      </a>
                    </h5>
                    <p className="card-text">Type: {listing.type}</p>
                    <form onSubmit={(event) => this.handleFormSubmit(event, index)}>
                      <div className="form-group">
                        <label htmlFor="reviewInput">Add Review Summary:</label>
                        <textarea
                          className="form-control"
                          id="reviewInput"
                          rows="3"
                          value={newReview}
                          onChange={this.handleReviewInputChange}
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label htmlFor="emailInput">Email:</label>
                        <input
                          type="email"
                          className="form-control"
                          id="emailInput"
                          placeholder="Enter your email"
                          value={userEmail}
                          onChange={this.handleEmailInputChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="statusInput">Status:</label>
                        <select
                          className="form-control"
                          id="statusInput"
                          value={userStatus}
                          onChange={this.handleStatusInputChange}
                        >
                          <option value="">Select Status</option>
                          <option value="Former Tenant">Former Tenant</option>
                          <option value="Current Tenant">Current Tenant</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="commentInput">Add your comment:</label>
                        <textarea
                          className="form-control"
                          id="commentInput"
                          rows="3"
                          placeholder="Enter your comment"
                          value={newComment}
                          onChange={this.handleCommentInputChange}
                        ></textarea>
                      </div><br></br>
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </form>
                    {reviews[index] && (
                      <div className="card mt-4">
                        <div className="card-body">
                          {listingReviews.map((comment, i) => (
                            <div key={i} className="card bg-light mb-3">
                              <div className="card-body">
                                <h5 className="card-title">{reviews[index]}</h5>
                                <p className="card-text">
                                  <strong>Email:</strong> {comment.email}
                                </p>
                                <p className="card-text">
                                  <strong>Status:</strong> {comment.status}
                                </p>
                                <p className="card-text">
                                  <strong>Comment:</strong> {comment.comment}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
