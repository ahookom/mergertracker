import React from 'react'
import Table from './Table.jsx'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import FinancialsForm from './FinancialsForm.jsx'

class FinancialsTable extends React.Component{
  constructor(){
    super()
    this.state = {
      showFinancialsForm: false,
      activelyEditingFinancialsIndex: 0
    }
    this.addInfoHandler = this.addInfoHandler.bind(this)
    this.editButtonHandler = this.editButtonHandler.bind(this)
    this.toggleFinancialsForm = this.toggleFinancialsForm.bind(this)
  }

  addInfoHandler(e){
    e.preventDefault()
    this.setState({showFinancialsForm: true, activelyEditingFinancialsIndex: false})
  }

  editButtonHandler(index){
    this.setState({showFinancialsForm: true, activelyEditingFinancialsIndex: index})
  }

  toggleFinancialsForm(){
    this.setState({showFinancialsForm: !this.state.showFinancialsForm})
  }

  render(){
    let currInfo = this.props.currentTargetFinancials
    return (
      <div className="col-md-9 col-sm-12 col-lg-6">
        {currInfo.length ?
          <Table
            rows = {currInfo}
            tableName = "Financials Information"
            editButtonHandler = {this.editButtonHandler}
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
  let currentTarget = state.targets.allTargets.filter(target=>+target.id===+state.targets.currentTargetId)[0]
  return {
    currentTargetFinancials: currentTarget.financials
  }
}

let mapDispatchToProps = null

export default connect(mapStateToProps,mapDispatchToProps)(FinancialsTable)
