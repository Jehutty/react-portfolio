import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MainComponent } from './components/MainComponent';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path={'/'} component={MainComponent}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
