import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/index.js'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      createLogger({collapsed: true})
    )
  )
)

export default store
