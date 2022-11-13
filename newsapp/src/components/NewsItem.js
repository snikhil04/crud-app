import React from 'react'

export default function NewsItem(props) {
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger" >{props.source}</span>
                </div>
                <img src={props.imageUrl ? props.imageUrl : 'https://image.shutterstock.com/image-vector/breaking-news-background-planet-260nw-698680423.jpg'} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className="text-muted">By <b>{props.author ? props.author : 'Unknown'}</b> on <b>{new Date(props.publishedAt).toGMTString()}</b></small></p>
                    <a href={props.newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div >
    )
}