import React, { Component } from 'react'
import FlipMove from 'react-flip-move'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBooks } from '../../actions'

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  renderBooks() {
    return this.props.books.reverse().map((book, index) => {

      return (
      
        <div className="row" key={book._id} >
        <div className="col s12 m6">
          <div className="card small">
            <div className="card-image">
              <img src={book.pic}  alt={book.title}/>
              <span className="card-title">{book.title}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
            </div>
            <div className="card-content">
              <p>{book.description}</p>
            </div>
          </div>
        </div>
        </div>
  
        // <div className="card cyan darken-1" key={book._id}>

        //   <Link to={`/books/${book._id}`} className="card-content white-text">
        //     <span className="card-title center">{book.title}</span>
        //   </Link>
        // </div>
    )
    })
  }
  render() {
    return (

      <div>
        <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
          {this.renderBooks()}
        </FlipMove>


      </div>
    );
  }
}
function mapStateToProps(state) {
  return { books: state.book }
}

export default connect(mapStateToProps, { fetchBooks })(BookList)
