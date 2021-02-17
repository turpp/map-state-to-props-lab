import React, { Component } from 'react';
import {connect} from 'react-redux'
// add any needed imports here
class Users extends Component {

  renderUsers = () => {
    if(this.props.users){
      return this.props.users.map(username=>{
        return <li>{username}</li>
      })
    }
  }

  renderUserCount = () => {
    // debugger
      return <p>{this.props.users.length}</p>
  }

  render() {
    return (
      <div>
        <ul>
          Users!
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {this.renderUsers()}
          {/* In addition, display the total number of users curently in the store */}
          {this.props.userCount}
          
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
return {users: state.users.map(user=> user.username), userCount: state.users.length}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
