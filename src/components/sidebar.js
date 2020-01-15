import React, { Component } from 'react';
import './styles/Sidebar.css'

class Sidebar extends Component {
  state = { visible: false }

  renderSidebar = () => {
    const { visible } = this.state
    return(
      <div>
      {
        visible ?
        <div className="sidenav">
          <button onClick={() => this.setState({visible: false})}>Click Me</button>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
        :
        <button onClick={() => this.setState({visible: true})}>Click Me</button>
      }
      </div>
    )
  }

	render() {
		return(
      <div>
        {this.renderSidebar()}
      </div>
    )
	}

}

export default Sidebar;
