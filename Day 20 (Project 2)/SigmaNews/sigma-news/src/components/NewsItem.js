import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description, urlToImage, url } = this.props
        return (
            <div className="container">
                <div className="card" style={{ width: '15rem' }}>
                    <img src={urlToImage} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p>{description}</p>
                        <a href={url} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
} 
