import React from 'react'
import Table from './Table.jsx'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import FinancialsForm from './FinancialsForm.jsx'
import { updateTarget } from '../reducers/targetsReducer.js'

class FinancialsTable extends React.Component{
  constructor(){
    super()
    this.state = {
      showFinancialsForm: false,
      activelyEditingFinancialsIndex: false
    }
    this.addInfoHandler = this.addInfoHandler.bind(this)
    this.editButtonHandler = this.editButtonHandler.bind(this)
    this.toggleFinancialsForm = this.toggleFinancialsForm.bind(this)
    this.deleteButtonHandler = this.deleteButtonHandler.bind(this)
  }

  addInfoHandler(e){
    e.preventDefault()
    this.setState({showFinancialsForm: true, activelyEditingFinancialsIndex: false})
  }

  editButtonHandler(index){
    this.setState({showFinancialsForm: true, activelyEditingFinancialsIndex: index})
  }

  deleteButtonHandler(delIndex){
    let updatedFinancials = this.props.currentTargetFinancials.filter((metricArr,index) => +index !== +delIndex)
    let updatedTarget = {id: this.props.currentTargetId, financials: updatedFinancials}
    this.props.updateTarget(updatedTarget)
  }

  toggleFinancialsForm(){
    this.setState({showFinancialsForm: !this.state.showFinancialsForm, activelyEditingFinancialsIndex: false})
  }

  render(){
    let currInfo = this.props.currentTargetFinancials
    return (
      <div className="col-md-9 col-sm-12 col-lg-6" style={{marginBottom: '75px'}}>
        {currInfo.length ?
          <Table
            rows = {currInfo}
            tableName = "Financials Information"
            editButtonHandler = {this.editButtonHandler}
            deleteButtonHandler = {this.deleteButtonHandler}
          /> :
          <h3>No Financials Added</h3>
        }
        {this.state.showFinancialsForm ?
          <FinancialsForm index = {this.state.activelyEditingFinancialsIndex} submitCallback = {this.toggleFinancialsForm} />  :
          <Button bsStyle="info" onClick={this.addInfoHandler}>Add Info</Button>
        }
      </div>
    )
  }
}

let mapStateToProps = state => {
  let currentTarget = state.targets.allTargets.filter(target => +target.id === +state.targets.currentTargetId)[0]
  return {
    currentTargetFinancials: currentTarget.financials,
    currentTargetId: state.targets.currentTargetId
  }
}

let mapDispatchToProps = dispatch => {
  return {
    updateTarget: (newTarget) => dispatch(updateTarget(newTarget))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(FinancialsTable)
