import React from 'react'
import FinancialsTable from './FinancialsTable.jsx'
import FinancialsForm from './FinancialsForm.jsx'

const FinancialProfile = (props) => {
  return (
    <div className="col-lg-12">
      <div className="row">
        <h3>Financial Profile</h3>
        <FinancialsTable />
      </div>
    </div>
  )
}

export default FinancialProfile
