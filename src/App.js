import './App.css';
import {BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
import {createStore,applyMiddleware} from "redux"
import reducers from './reducers'
import {Provider} from 'react-redux'
import ReduxThunk from 'redux-thunk'
import Home from './pages/Home'

const store = createStore(reducers, {},applyMiddleware(ReduxThunk));

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        <Component {...props} />
    )} />
  )

  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
