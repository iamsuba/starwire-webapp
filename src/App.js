import logo from './logo.svg';
import styles from './App.scss';
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom'
import Library from './Library'
import Projects from './pages/Projects'
import Config from './config.js'
import ProjectDetailed from './pages/ProjectDetailed'
import Simulator from './pages/Simulator'
import SignIn from './pages/SignIn'

function App() {

  return (
    <BrowserRouter className={styles.app}>
      <Switch>
        <Route exact path="/library">
          <Library />
        </Route>
        <Route exact path="/projects">
          <Projects data={Config.projects} />
        </Route>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path='/projectDetailed' component={ProjectDetailed} />
        <Route path='/simulator' component={Simulator} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
