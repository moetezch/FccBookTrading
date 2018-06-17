import React, { Component } from "react"
import { connect } from "react-redux"
import { Link,NavLink } from "react-router-dom"
import { Dropdown,NavItem,Button } from "react-materialize"

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return [
            <li key="1" >
            
            <Dropdown trigger={
                <Button>Login</Button>
              }>
              <NavItem href="/auth/google">Google</NavItem>
              <NavItem href="/auth/twitter">Twitter</NavItem>
              <NavItem href="/auth/github">Github</NavItem>
            </Dropdown>
          </li>
        ]
      default:
        return [
            <ul style={{"width":"250px", "marginTop":"65px"}} className="side-nav fixed" key="1">

         <li><NavLink to="/books" ><i className="material-icons">done_all</i>All Books</NavLink></li>
         <li><NavLink to="/mybooks" ><i className="material-icons">done</i>My Books</NavLink></li>
         <li><NavLink to="/mybooks/new" ><i className="material-icons">add</i>Add Book</NavLink></li>
         <li><NavLink to="/sent" ><i className="material-icons">arrow_upward</i>Sent requests</NavLink></li>
         <li><NavLink to="/received" ><i className="material-icons">arrow_downward</i>Received requests</NavLink></li>
         <li><NavLink to="/profile" ><i className="material-icons">account_circle</i>Profile</NavLink></li>
         <li><a href="/api/logout" ><i className="material-icons">do_not_disturb</i>Logout</a></li>
        </ul>  
    ]

       
        
    }
  }
  render() {
    return (
        <div>
        <header>
        <nav className="top-nav  blue-grey darken-1">
        <div className="nav-wrapper container">
          <Link
            to={this.props.auth ? "/dashboard" : "/"}
            className="left brand-logo"
            
          >
            Book Trading
          </Link>
          <ul className='right'> {this.renderContent()}</ul>
          </div>
          
        </nav>
  </header>
</div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)

