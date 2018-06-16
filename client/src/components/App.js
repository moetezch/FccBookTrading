import React, { Component } from 'react';
import { BrowserRouter, Route,Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../actions'

import Header from './Header'
import Landing from './Landing'
import Profile from './Profile'
import AllBooks from './books/AllBooks'
import MyBooks from './books/MyBooks'
import NewBook from './books/NewBook'
import Trade from './books/Trade'
import BookItem from './books/BookItem'
import UserDetails from './users/UserDetails';


class App extends Component {
  
  componentDidMount() {
    this.props.fetchUser()
  }
  renderContent() {
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={props =>
          this.props.auth ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
    return(
    
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path="/profile" component={Profile} />
        <Route path="/books" component={AllBooks} />
        <Route path="/book/:id" component={BookItem} />
        <Route exact path="/mybooks" component={MyBooks} />
        <Route exact path="/mybooks/new" component={NewBook} />
        <Route path="/trade" component={Trade} />
        <Route path="/users/:id" component={UserDetails} />
      </div>
    </BrowserRouter>
 

    )
  }
  render() {
    return (
      <div className="">

        {this.renderContent()}
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}


export default connect(mapStateToProps, actions)(App)
