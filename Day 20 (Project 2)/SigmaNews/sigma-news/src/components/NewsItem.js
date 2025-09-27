import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className="container">
                <div className="card" style={{ width: '15rem' }}>
                    <img src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/6Z26VOI32M2XWAD44YWESYCRU4_size-normalized.JPG&w=1440" class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <a href="#" className="btn btn-primary">{this.props.desc}</a>
                    </div>
                </div>
            </div>
        )
    }
} 
