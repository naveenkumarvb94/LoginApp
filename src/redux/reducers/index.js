import { combineReducers } from 'redux'
import login from './login'
import tableJson from './tableJson'

export default combineReducers({
  login,
  tableJson
})