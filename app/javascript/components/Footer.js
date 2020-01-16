import React, { Component } from 'react';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <div className="flexfoot">
          <a href="https://github.com/VirAlex" className="aicon" target="_blank"><i className="github icon"></i></a>
          <a href="https://www.linkedin.com/in/alexandre-viretti-8b219568/" className="aicon" target="_blank"><i className="linkedin icon"></i></a>
          <a href="https://twitter.com/alexou3103" className="aicon" target="_blank"><i className="twitter icon"></i></a>
        </div>
      </div>
    );
  }
}
