import React from 'react';

class Home extends React.Component {
  render() {
    const containerStyle = {
      position: 'relative',
      textAlign: 'center',
      overflow: 'hidden',
      height: '100vh',
    };

    const imageSrc =
      'https://cdn.realestateview.com.au/illuminate/images/1024-max/wp_advice_1674-b-0-110e376206e6c6.jpeg';

    const centeredStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontFamily: 'Arial, sans-serif',
    };

    const headingStyle = {
      fontSize: '36px',
      marginBottom: '20px',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };

    const descriptionStyle = {
      fontSize: '18px',
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      color: 'white',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: '8px',
    };

    const imageOverlayStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    };

    return (
      <div className="imgContainer" style={containerStyle}>
        <img src={imageSrc} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Background" />
        <div className="centered" style={centeredStyle}>
          <h1 style={headingStyle}>What is Ranter?</h1>
          <h2 style={descriptionStyle}>
            Are you tired of struggling to find the perfect rental property? Look no further than Ranter! Our platform
            provides tenants with the most current and authentic reviews from previous renters, helping you to find your
            ideal home. Say goodbye to the guesswork and frustration of the rental search process and say hello to the
            ease and convenience of Ranter!
          </h2>
        </div>
        <div className="imageOverlay" style={imageOverlayStyle}></div>
      </div>
    );
  }
}

export default Home;
