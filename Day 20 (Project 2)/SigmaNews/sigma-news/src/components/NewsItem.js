import React, { Component } from 'react'

export default class NewsItem extends Component {
  fixedImage = 'https://cdn.pixabay.com/photo/2024/07/14/14/42/woman-8894656_1280.jpg';

  render() {
    let { title, description, urlToImage, url } = this.props;

    return (
      <div className="container">
        <div className="card" style={{ width: '25rem' }}>
          <img
            src={urlToImage?urlToImage : this.fixedImage}
            className="card-img-top"
            onError={(e) => {
              e.target.onerror = null; // prevent infinite loop
              e.target.src = this.fixedImage; // fallback image
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{description}</p>
            <a href={url} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}
