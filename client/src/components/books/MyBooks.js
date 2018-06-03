import React, { Component } from 'react'
import BookList from './BookList'

export default class MyPBooks extends Component {

  render() {
    return (
      <div className="container">
        <BookList />
      </div>
    );
  }
}