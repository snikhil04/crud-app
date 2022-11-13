import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export default function News(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const fetchNews = async () => {
        props.setProgress(10)
        console.log('page on fetchNews => ' + page)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(30)
        let parsedData = await data.json();
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }

    const changeUpperCase = (string) => { return string.charAt(0).toUpperCase().concat(string.substr(1)); }
    useEffect(() => {
        fetchNews(); document.title = `${changeUpperCase(props.category)} - NewsMonkey`;
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(prevPage => prevPage + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
            <h1 className='text-center' style={{ margin: '35px 0px', marginTop: '90px' }}>Top ({changeUpperCase(props.category)}) Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={articles.length <= totalResults ? <Spinner /> : ''}>

                <div className="container">
                    <div className="row">
                        {articles.map((article, index) => {
                            return <div className="col-md-4" key={index}>
                                <NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url} author={article.author} publishedAt={article.publishedAt} source={article.source.name} />
                            </div>

                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

News.defaultProps = { country: 'in', pageSize: 5, category: 'general' }
News.propsTypes = { country: PropTypes.string, pageSize: PropTypes.number, category: PropTypes.string }