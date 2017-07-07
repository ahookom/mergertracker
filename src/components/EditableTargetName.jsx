import React from 'react'
import NameEditor from './NameEditor.jsx'
import { connect } from 'react-redux'
import { deleteTarget } from '../reducers/targetsReducer.js'
import { browserHistory } from 'react-router'

class EditableTargetName extends React.Component{
  constructor(){
    super()
    this.state = {
      showNameEditor: false
    }
    this.handleEditClick = this.handleEditClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }
  handleEditClick(){
    this.setState({showNameEditor: !this.state.showNameEditor})
  }
  handleDeleteClick(){
    this.props.deleteTarget(this.props.currentTargetId)
    browserHistory.push('/home')
  }
  render(){
    return (
      <div className="col-lg-12">
        {this.state.showNameEditor ?
          <NameEditor handleEditClick = {this.handleEditClick} /> :
          <span>
            <h1 className="page-header">{this.props.currentTargetName}
            <i onClick={this.handleEditClick} className='fa fa-edit fa-fw'></i>
            <i onClick={this.handleDeleteClick} className='fa fa-trash-o fa-fw'></i></h1>
          </span>
        }
      </div>
    )
  }
}

const mapStateToProps = null
const mapDispatchToProps = dispatch => {
  return {
    deleteTarget: (id) => dispatch(deleteTarget(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditableTargetName)
