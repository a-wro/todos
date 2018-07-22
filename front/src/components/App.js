import React, { Component } from 'react'
import TaskBox from './TaskBox'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/'
import Grid from  '@material-ui/core/Grid'

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Grid container spacing={24}>
            <Grid item xs={12}>
            <TaskBox />
            </Grid>
            <Grid item xs={6} ys={2}>
            <div>

            </div>
            </Grid>
          </Grid>
        </div>
      </Provider>
    );
  }
}

export default App;
