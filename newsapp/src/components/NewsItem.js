import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, publishedAt, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%', zIndex : '1'}}>{source}</span>
                    <img src={imageUrl ? imageUrl : 'https://image.shutterstock.com/image-vector/breaking-news-background-planet-260nw-698680423.jpg'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By <b>{author ? author : 'Unknown'}</b> on <b>{new Date(publishedAt).toGMTString()}</b></small></p>
                        <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem