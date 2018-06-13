import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'

class Trade extends Component {
  componentDidMount() {
    this.props.fetchSentTrade()
  }
  renderSentTrades(){
    if (this.props.trade) {
      return this.props.trade.map((trade)=>{
        return (


          <li className="collection-item avatar" key={trade._id}>
          <i className="material-icons circle">folder</i>
          <span className="title">Title</span>
          <p>Owner : {trade.receiver._user}</p>
          <p>status : {trade.status}</p>
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