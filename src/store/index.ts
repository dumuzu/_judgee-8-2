import { createStore,applyMiddleware } from 'redux'
import rootReducer from './reducers/index'
//支持异步
import thunk from 'redux-thunk'
//浏览器中调试redux
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)))