import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {

  pageSize = 9;
  apiKey = 'd6dd01ac99104409bdaf8654243eee15'

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} key="general" pageSize={this.pageSize} country={'in'} category={'general'} />} />
            <Route exact path="/business" element={<News apiKey={this.apiKey} key="business" pageSize={this.pageSize} country={'in'} category={'business'} />} />
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} key="entertainment" pageSize={this.pageSize} country={'in'} category={'entertainment'} />} />
            <Route exact path="/health" element={<News apiKey={this.apiKey} key="health" pageSize={this.pageSize} country={'in'} category={'health'} />} />
            <Route exact path="/science" element={<News apiKey={this.apiKey} key="science" pageSize={this.pageSize} country={'in'} category={'science'} />} />
            <Route exact path="/sports" element={<News apiKey={this.apiKey} key="sports" pageSize={this.pageSize} country={'in'} category={'sports'} />} />
            <Route exact path="/technology" element={<News apiKey={this.apiKey} key="technology" pageSize={this.pageSize} country={'in'} category={'technology'} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

// f481e3c1917b47aca2e94c2b81027b2f