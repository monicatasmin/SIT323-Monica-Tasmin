import React from 'react';
import logo from './logo.png';

class TopNav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ marginBottom: '0px' }}>
        <a className="navbar-brand" href="/">
          <img src={logo} style={{ width: '100px', height: '30px', marginLeft: '20px' }} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a style={{margin: 10, marginTop: 16}} className="nav-link" href="#review">Reviews</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default TopNav;
