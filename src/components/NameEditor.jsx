import React from 'react'
import { FormControl, FormGroup, Form } from 'react-bootstrap'
import { updateTarget } from '../reducers/targetsReducer.js'
import { connect } from 'react-redux'

class NameEditor extends React.Component{
  constructor(props){
    super()
    let currentTarget = props.targets.filter(target => +target.id === +props.currentTargetId)[0]
    this.state = {
      currentTargetName: currentTarget.name
    }
    this.handleChange = this.handleChange.bind(this)
    this.saveNewName = this.saveNewName.bind(this)
  }
  handleChange(e){
    this.setState({currentTargetName: e.target.value})
  }
  saveNewName(e){
    e.preventDefault()
    this.props.updateTarget({id: this.props.currentTargetId, name: this.state.currentTargetName})
    this.props.handleEditClick()
  }
  render(){
    return (
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Form inline onSubmit={this.saveNewName}>
          <FormGroup bsSize="lg">
            <FormControl componentClass="input" type="string" placeholder={this.state.currentTargetName} onChange={this.handleChange}>
            </FormControl>
          <i onClick={this.saveNewName} className='fa fa-check-square-o fa-fw'></i>
          </FormGroup>
        </Form>
      </div>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    targets: state.targets.allTargets,
    currentTargetId: state.targets.currentTargetId
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateTarget: (targetObj) => dispatch(updateTarget(targetObj))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NameEditor)
