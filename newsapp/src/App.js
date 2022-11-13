import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  pageSize = 9;
  apiKey = process.env.REACT_APP_NEWS_API_KEY;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={'in'} category={'general'} />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={'in'} category={'business'} />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={'in'} category={'entertainment'} />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={'in'} category={'health'} />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={'in'} category={'science'} />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={'in'} category={'sports'} />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={'in'} category={'technology'} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

// f481e3c1917b47aca2e94c2b81027b2f
// d6dd01ac99104409bdaf8654243eee15
// aff87463db6442df9e9d7e48727a652f