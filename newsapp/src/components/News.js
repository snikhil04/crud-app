import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


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
            page: 1,
            totalResults: 0,
            category: 'general',
            loading : true
        }
        document.title = `${this.changeUpperCase(this.props.category)} - NewsMonkey`;
    }

    async updateNews() {
        this.props.setProgress(10)
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30)
        let parsedData = await data.json();
        this.props.setProgress(70)
        this.setState({
            page: this.state.page,
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading : false
        })
        this.props.setProgress(100)
    }

    changeUpperCase(string) { return string.charAt(0).toUpperCase().concat(string.substr(1)); }
    async componentDidMount() { this.updateNews() }
    // handlePrevClick = async () => { this.updateNews(this.state.page - 1) }
    // handleNextClick = async () => { this.updateNews(this.state.page + 1) }

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
        })
    };

    render() {
        return (
            <>
                <h1 className='text-center'>Top ({this.changeUpperCase(this.props.category)}) Headlines</h1>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={this.state.articles.length<=this.state.totalResults ? <Spinner /> : ''}>

                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((article,index) => {
                                return <div className="col-md-4" key={index}>
                                    <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url} author={article.author} publishedAt={article.publishedAt} source={article.source.name} />
                                </div>

                            })}
                        </div>
                    </div>

                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page === 1} type="button" onClick={this.handlePrevClick} className="btn btn-dark"> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handleNextClick} className="btn btn-dark"> &rarr; Next</button>
                </div> */}
            </>
        )
    }
}

export default News