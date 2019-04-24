import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { createStore } from 'redux'
import Login from './src/app/index.js'
import rootReducer from './src/redux/reducers'

const store = createStore(rootReducer)

export default class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <Login/>
      </Provider>
    )
  }
}
