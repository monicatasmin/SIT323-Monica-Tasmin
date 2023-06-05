import React from 'react';

class PropertyListing extends React.Component {
  render() {
    return (
      <div className="property-listing">
        <iframe
          title="realestate-widget"
          src="https://www.realestate.com.au/property-apartment-vic-melbourne-436925724"
          width="100%"
          height="300"
          frameBorder="0"
        ></iframe>
      </div>
    );
  }
}

export default PropertyListing;
