import React from 'react'
import { connect } from 'react-redux'
import { updateTarget } from '../reducers/targetsReducer.js'
import { Button, FormGroup, FormControl, ControlLabel, Checkbox , HelpBlock } from 'react-bootstrap'


function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
}

class FinancialsForm extends React.Component{
  constructor(props){
    super()
    let oldValues = {
      metric: '',
      value: ''
    }
    if(props.index !== false){
      console.log('in conditional',props.index)
      let metricArr = props.currentTargetFinancials[props.index]
      oldValues.metric = metricArr[0]
      oldValues.value = metricArr[1]
    }
    this.state = oldValues
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    let newFinancials = this.props.currentTargetFinancials
    let newInfoArr = [this.state.metric,this.state.value]
    if(this.props.index !== false){
      newFinancials[this.props.index]=newInfoArr
    }else{
      newFinancials.push(newInfoArr)
    }
    this.props.updateTarget({id: this.props.currentTargetId, financials: newFinancials})
    this.props.submitCallback()
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    })
  }

  render(){
    return (
      <div className="container col-lg-8 col-md-10 col-sm-12" style={{marginBottom: 20}}>
        <form onSubmit={this.handleSubmit}>
          <FieldGroup
            id="formControlsName"
            type="text"
            label="Metric"
            name="metric"
            placeholder={this.state.metric}
            onChange={this.handleInputChange}
          />
          <FieldGroup
            id="formControls"
            type="text"
            label="Value"
            name="value"
            placeholder={this.state.value}
            onChange={this.handleInputChange}
          />
          <Button type='submit' bsStyle="primary">Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  let currentTarget = state.targets.allTargets.filter(target=>+target.id === +state.targets.currentTargetId)[0]
  return {
    currentTargetId: state.targets.currentTargetId,
    currentTargetFinancials: currentTarget.financials
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTarget: (newTarget) => dispatch(updateTarget(newTarget))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FinancialsForm)
