import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import StatusIndicator from './StatusIndicator.jsx'
import FinancialContainer from './FinancialContainer.jsx'
import ContactsContainer from './ContactsContainer.jsx'
import EditableTargetName from './EditableTargetName.jsx'

const TargetView = props => {
  let currentTarget = props.targets.filter(target =>+target.id===+props.currentTargetId)[0]
  return (
    <div id="page-wrapper">
      <div className="row">
        <EditableTargetName currentTargetName ={currentTarget.name} />
        <StatusIndicator status={currentTarget.status} />
      </div>
      <FinancialContainer />
      <ContactsContainer />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    targets: state.targets.allTargets,
    currentTargetId: state.targets.currentTargetId
  }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(TargetView)
