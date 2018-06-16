import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import * as actions from '../../actions'
import { Modal, Button, Row, Input } from "react-materialize"


class Trade extends Component {
  componentDidMount() {
    this.props.fetchSentTrade()
  }
  renderSentTrades(){
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
          <div className="col s12">
            <ul className="tabs">
              <li className="tab col s6"><a className="active" href="#1">Sent Requests</a></li>
              <li className="tab col s6"><a href="#2">Received Requests</a></li>
            </ul>
          </div>
      <div className="col s12" id="1">

            <h3>Sent Requests</h3>
            <ul className="collection">
      {this.renderSentTrades()}
      </ul>
      </div>
      <div className="col s12" id="2">
  
  
            <h3>Received Requests</h3>
  
      
      </div>
    </div>
  
    </div>
    );
  }
}

function mapStateToProps(state) {
  return { trade:state.trade}
}


export default connect(mapStateToProps, actions)(Trade)