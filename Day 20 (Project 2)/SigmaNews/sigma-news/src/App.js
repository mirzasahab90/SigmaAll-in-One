import React, { Component, useState } from 'react'
import NavBar from './components/NavBar'
import NewsItem from './components/NewsItem'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container my-3">
          <h1>Headlines</h1>
          <div className="row">
            <div className="col-md-4">

              <NewsItem title={'Breaking News'} desc={'Trump is dead'} />
            </div>
            <div className="col-md-4">

              <NewsItem title={'Breaking News'} desc={'Trump is dead'} />
            </div>
            <div className="col-md-4">

              <NewsItem title={'Breaking News'} desc={'Trump is dead'} />
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
