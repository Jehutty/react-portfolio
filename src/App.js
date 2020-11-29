import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainComponent } from './components/MainComponent';
import { TodoPomodoro } from './components/TodoPomodoro';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={'/'} component={MainComponent}></Route>
          <Route path={'/pomodo'} component={TodoPomodoro}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
