import React, { Component } from 'react'
import TaskBox from './TaskBox'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/'

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TaskBox />
        </div>
      </Provider>
    );
  }
}

export default App;
