import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'
import { Dropdown,NavItem,Button } from "react-materialize"


class ReceivedRequest extends Component {
  componentDidMount() {
    this.props.fetchReceivedTrade()
  }
  renderReceivedTrades(){
    if (this.props.trade) {
      return this.props.trade.map((trade,index)=>{
        return (
          <li className="collection-item avatar" key={trade._id}>
          <i className="material-icons circle green">compare_arrows</i>
          <span className="title">#{index+1}</span>
          <p>Exchange Book : {trade.sender.bookTitle}</p>
        <p>Requested Book : {trade.receiver.bookTitle}</p>
          <p><Link to={`/users/${trade.receiver._user}`}>Book Owner details</Link></p>
          <p>Status : {trade.status}</p>
          <Dropdown trigger={
            <Button>Choice</Button>
          }>
          <NavItem onClick={()=>{console.log('Yes');
          }}>Accept</NavItem>
          <NavItem onClick={()=>{console.log('No');
        }}>Decline</NavItem>
        </Dropdown>
          <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
      )
      })
    }
  }
  render() {
    return (
      <div className="container">
      <div className="row">

          <div className="col s12" id="1">
            <h3>Received Requests</h3>
            <ul className="collection">
              {this.renderReceivedTrades()}
            </ul>
          </div>
    </div>
  
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { trade:state.trade}
}


export default connect(mapStateToProps, actions)(ReceivedRequest)