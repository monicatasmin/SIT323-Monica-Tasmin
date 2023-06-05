import React from 'react';
import './App.css';
import TopNav from './TopNav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize state properties
      reviews: [],
      newReview: '',
      comments: [],
      listings: [
        // Passing property listings data
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

  /* Handles changes in input fields */
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /* Handles form submission */
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

  render() {
    const { listings, reviews, newReview, comments, newComment, userEmail, userStatus, filterType } = this.state;

    const filteredListings = // Perform filtering based on filterType

    return (
      <div className="App">
        <TopNav
          // Pass necessary props to topnav component
        />
        <div className="container">
          <h1>Property Listings</h1>
          {/* Render property listings */}
          {filteredListings.map((listing, index) => (
            <div key={index} className="listing">
              <img src={listing.image} alt="Property" />
              <p>{listing.address}</p>
              <p>{listing.type}</p>
              <div className="reviews">
                {/* Render reviews */}
                {reviews[index] ? (
                  <p>{reviews[index]}</p>
                ) : (
                  <p>No reviews yet</p>
                )}
              </div>
              <div className="comments">
                {/* Render comments */}
                {comments.map((comment, commentIndex) => {
                  if (comment.reviewIndex === index) {
                    return (
                      <div key={commentIndex} className="comment">
                        <p>{comment.email} ({comment.status}):</p>
                        <p>{comment.comment}</p>
                      </div>
                    );
                  }
                })}
              </div>
              <form onSubmit={(event) => this.handleFormSubmit(event, index)}>
                <input
                  type="text"
                  name="newComment"
                  value={newComment}
                  onChange={this.handleInputChange}
                  placeholder="Add a comment..."
                />
                <button type="submit">Submit</button>
              </form>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
