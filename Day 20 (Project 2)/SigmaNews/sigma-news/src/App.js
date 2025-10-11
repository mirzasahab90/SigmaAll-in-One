import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News category="general" />} />
            <Route exact path="/business" element={<News category="business" />} />
            <Route exact path="/entertainment" element={<News category="entertainment" />} />
            <Route exact path="/health" element={<News category="health" />} />
            <Route exact path="/science" element={<News category="science" />} />
            <Route exact path="/sports" element={<News category="sports" />} />
            <Route exact path="/technology" element={<News category="technology" />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
