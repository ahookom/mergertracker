import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import StatusIndicator from './StatusIndicator.jsx'
import FinancialContainer from './FinancialContainer.jsx'
import ContactsContainer from './ContactsContainer.jsx'
import { browserHistory } from 'react-router'

const TargetView = props => {
  let currTarget = props.targets.filter(target =>+target.id===+props.currentTargetId)[0]
  return (
    <div id="page-wrapper">
      <div className="row">
          <div className="col-lg-12">
              <h1 className="page-header">{currTarget.name}</h1><i className='icon-edit'></i>
          </div>
          <StatusIndicator status={currTarget.status} updated={currTarget.updated} />
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

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TargetView)
