//actions
const CREATE_NEW_TARGET = 'CREATE_NEW_TARGET'
const UPDATE_TARGET = 'UPDATE_TARGET'
const DELETE_TARGET = 'DELETE_TARGET'
const SET_CURRENT_TARGET = 'SET_CURRENT_TARGET'

//action creators
export const createNewTarget = id => {
  return {
    type: CREATE_NEW_TARGET,
    targetId: id
  }
}

export const updateTarget = newTarget => {
  return {
    type: UDATE_TARGET,
    updatedTarget: updatedTarget
  }
}

export const deleteTarget = targetId => {
  return {
    type: DELETE_TARGET,
    id: targetId
  }
}

export const setCurrentTarget = targetId => {
  return {
    type: SET_CURRENT_TARGET,
    id: targetId
  }
}

const initialState = {
    allTargets: [
      {
        id: 1,
        name: 'Amazon',
        status: 'researching',
        comments: 'nice growth rate, logistics resources',
        updated: 'June 15, 2017'
      }
    ],
    currentTargetId: 1,
    nextTargetId: 2
}

const targetsReducer = (state = initialState, action) => {
  let newState = Object.assign({}, state)
  switch (action.type) {
  case CREATE_NEW_TARGET:
    let newTarget = {
      id: newState.nextTargetId++,
      name: '',
      status: '',
      comments: ''
    }
    newState.allTargets = [...newState.allTargets, newTarget]
    break
  case UPDATE_TARGET:
    let updatedTarget = action.updatedTarget
    let newAllTargets = newState.allTargets.map(target => {
      if (+target.id === +action.id){
        return Object.assign(target, updatedTarget)
      } else {
        return target
      }
    })
    newState.allTargets = newAllTargets
    break
  case DELETE_TARGET:
    let allTargetsAfterRemoval = newState.allTargets.filter(target => +target.id !== +action.id)
    newState.allTargets = allTargetsAfterRemoval
    break
  case SET_CURRENT_TARGET:
    newState.currentTargetId = action.id
    break
  default:
    return state
  }
  return newState
}

export default targetsReducer
