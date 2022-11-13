import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 5,
        category: 'general'
    }

    static propsTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
            category: 'general'
        }
        document.title = `${this.changeUpperCase(this.props.category)} - NewsMonkey`;
    }

    async updateNews(pageNumber) {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${pageNumber}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            page: pageNumber,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    changeUpperCase(string) {
        return string.charAt(0).toUpperCase().concat(string.substr(1));
    }

    async componentDidMount() { this.updateNews(this.state.page) }
    handlePrevClick = async () => { this.updateNews(this.state.page - 1) }
    handleNextClick = async () => { this.updateNews(this.state.page + 1) }

    render() {
        return (
            <div className='container my-3'>
                {this.state.loading && <Spinner />}
                <h1 className='text-center'>Top ({this.changeUpperCase(this.props.category)}) Headlines</h1>
                <div className="row">

                    {!this.state.loading && this.state.articles.map((article) => {
                        return <div className="col-md-4" key={article.url}>
                            <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url} author={article.author} publishedAt={article.publishedAt} source={article.source.name} />
                        </div>

                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page === 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark"> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark"> &rarr; Next</button>
                </div>
            </div>
        )
    }
}

export default News