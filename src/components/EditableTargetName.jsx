import React from 'react'
import NameEditor from './NameEditor.jsx'

class EditableTargetName extends React.Component{
  constructor(){
    super()
    this.state={
      showNameEditor: false
    }
    this.handleEditClick = this.handleEditClick.bind(this)
  }
  handleEditClick(){
    this.setState({showNameEditor: !this.state.showNameEditor})
  }
  render(){
    return (
      <div className="col-lg-12">
        {this.state.showNameEditor ?
          <NameEditor handleEditClick = {this.handleEditClick} /> :
          <h1 className="page-header">{this.props.currentTargetName}
            <i onClick={this.handleEditClick} className='fa fa-edit fa-fw'></i>
          </h1>
        }
      </div>
    )
  }
}

export default EditableTargetName

