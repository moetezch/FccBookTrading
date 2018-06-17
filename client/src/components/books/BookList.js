import React, { Component } from 'react'
import FlipMove from 'react-flip-move'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../actions'

class BookList extends Component {
  componentDidMount() {
    if (this.props.match.path==="/mybooks") {
      this.props.fetchMyBooks()
    } else {
      this.props.fetchBooks()
    }
  }
 
  renderBooks() {

    return this.props.books.reverse().map((book, index) => {
      
      return (
        
        <div className="col s4" key={book._id}>
        <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={book.pic} style={{height:300,width:411}} alt={book.title}/>
        </div>
        <div className="card-content center">
          <span style={{  whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "400px"}}
             className="card-title activator grey-text text-darken-4">
             {book.title}
             </span>
          <Link className="btn" to={`/book/${book._id}`}><i className="material-icons">details</i>More Infos</Link>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{book.title}<i className="material-icons right">close</i></span>
          <p>{book.description}</p>
        </div>
        </div>
        </div>
  
      )
    })
  }
  render() {
    return (

      <div style={{marginLeft:200}}>
        <FlipMove maintainContainerHeight={true} duration={750} easing="ease-out">
        <div className="row" >
          {this.renderBooks()}
          </div>
        </FlipMove>


      </div>
    );
  }
}
function mapStateToProps(state) {
  return { books: state.book,user:state.user}
}

export default connect(mapStateToProps, actions)(BookList)
