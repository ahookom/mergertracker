import React from 'react'

const StatusIndicator = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
      <p>Status: {props.status}</p>
      <p>Last updated: {props.updated}</p>
      </div>
    </div>
  )
}

export default StatusIndicator
