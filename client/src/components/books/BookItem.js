import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { reduxForm} from 'redux-form'
import { Modal, Button, Row, Input } from "react-materialize"
import * as actions from '../../actions'

class BookItem extends Component {
  componentDidMount() {
    this.props.book ? this.props.userProfile(this.props.book._user) : ""


    console.log(this.props);
  }
handleTrade(value){
  console.log(value);
  
}

  renderBook() {
    const { handleSubmit } = this.props
    if (this.props.book && this.props.user) {
      return (
        <div className="center">
          <h2>{this.props.book.title}</h2>
          <img src={this.props.book.pic} />
          <p>Description : {this.props.book.description}</p>
          <h4>Owner informations : </h4>
          <p>Country : {this.props.user.address.country}</p>
          <p>State: {this.props.user.address.state}</p>
          <p>City : {this.props.user.address.city}</p>
          <Modal
            header='New Trade Request'
            trigger={<Button>Trade</Button>}
            actions={
              <div className="modal-footer">
              <a onClick={this.handleTrade} className="modal-close waves-effect waves-green btn-flat">Confirm</a>
              <a className="modal-close waves-effect waves-green btn-flat right">Cancel</a>
            </div>
          }
          >
            <p>Select a book to trade with :</p>
            <form onSubmit={handleSubmit((val)=>console.log(val)
            )}>
            <Row>
              <Input s={12} type='select' label="Book" defaultValue='1'>
                <option value='1'>Option 1</option>
                <option value='2'>Option 2</option>
                <option value='3'>Option 3</option>
              </Input>
            </Row>
            </form>
          </Modal>

        </div>
      )
    }

  }
  render() {
    return (
      <div className="container">
        {this.renderBook()}

      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return { book: state.book.find((book) => book._id === props.match.params.id), user: state.user }
}

BookItem = connect(mapStateToProps, actions)(BookItem)

export default reduxForm({
  form: 'tradeForm'
})(BookItem)