import React from 'react'
import { Link, browserHistory } from 'react-router'
import { connect } from 'react-redux'
import SearchForm from './SearchForm.jsx'
import { createNewTarget } from '../reducers/targetsReducer.js'

class SideBar extends React.Component{
  constructor(){
    super()
    this.addTargetHandler = this.addTargetHandler.bind(this)
  }

  addTargetHandler(e){
    e.preventDefault()
    this.props.createTarget(this.props.nextTargetId)
    browserHistory.push(`/target/${this.props.nextTargetId}`)
  }

  render(){
    return (
        <div className="navbar-default sidebar" role="navigation">
            <div className="sidebar-nav navbar-collapse">
                <ul className="nav" id="side-menu">

                <SearchForm />

                    <li>
                        <Link to="/home"><i className="fa fa-dashboard fa-fw"></i> Home</Link>
                    </li>

                    <li>
                        <Link to="/targets"><i className="fa fa-bar-chart-o fa-fw"></i> Targets<span className="fa arrow"></span></Link>
                        <ul className="nav nav-second-level">
                            {this.props.targets.allTargets.map((target, index)=>{
                                return (<li key={index}>
                                    <Link to={`/target/${target.id}`}> {target.name}</Link>
                                </li>)
                            })
                            }
                        </ul>
                    </li>
                    <li>
                    <Link to={`/target/${this.props.nextTargetId}`} onClick={this.addTargetHandler}>Create New Target</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    targets: state.targets,
    nextTargetId: state.targets.nextTargetId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTarget: (id) => dispatch(createNewTarget(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)
