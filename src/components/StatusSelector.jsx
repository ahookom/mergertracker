import React from 'react'
import { FormControl, Form } from 'react-bootstrap'
import { updateTarget } from '../reducers/targetsReducer.js'
import { connect } from 'react-redux'

class StatusSelector extends React.Component{
  constructor(props){
    super()
    let currentTarget = props.targets.filter(target => +target.id === +props.currentTargetId)[0]
    this.state = {
      currentTarget: currentTarget
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e){
    let newStatus = e.target.value
    let currentTarget = this.state.currentTarget
    currentTarget.status = newStatus
    this.props.updateTarget(currentTarget)
    this.setState({currentTarget: currentTarget})
  }
  render(){
    let possibleStatuses = ['researching', 'pending approval', 'approved','declined']
    let currentStatus = this.state.currentTarget.status
    return (
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Form inline>
          <FormControl componentClass="select" onChange={this.handleChange}>
          <option key='0' value={currentStatus}>{currentStatus}</option>
          {possibleStatuses.map((status,index)=>{
            if(status!==currentStatus){
              return <option key={index+1} value={status}>{status}</option>
            }
          })}
          </FormControl>
          <i onClick={this.props.handleEditClick} className='fa fa-check-square-o fa-fw'></i>
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

export default connect(mapStateToProps,mapDispatchToProps)(StatusSelector)
