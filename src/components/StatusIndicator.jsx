import React from 'react'
import StatusSelector from './StatusSelector.jsx'

class StatusIndicator extends React.Component{
  constructor(){
    super()
    this.state={
      showStatusSelect: false
    }
    this.handleEditClick = this.handleEditClick.bind(this)
  }
  handleEditClick(){
    this.setState({showStatusSelect: !this.state.showStatusSelect})
  }
  render(){
    return (
      <div className="container-fluid">
        <div className="row">
        {this.state.showStatusSelect ?
          <StatusSelector handleEditClick = {this.handleEditClick} /> :
          <p>Status: {this.props.status}<i onClick={this.handleEditClick} className='fa fa-edit fa-fw'></i></p>
        }
        </div>
      </div>
    )
  }
}

export default StatusIndicator
