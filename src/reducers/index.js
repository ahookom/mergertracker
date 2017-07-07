import { combineReducers } from 'redux'
import targets from './targetsReducer'
import financials from './financialsReducer'
import contacts from './contactsReducer'

const rootReducer = combineReducers({
  financials,
  targets,
  contacts
})

export default rootReducer
