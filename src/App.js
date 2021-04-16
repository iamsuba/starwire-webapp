import logo from './logo.svg';
import styles from './App.scss';
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom'
import Library from './Library'
import Projects from './pages/Projects'
import Config from './config.js'
import ProjectDetailed from './pages/ProjectDetailed';

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
        <Route exact path="/projectDetailed">
          <ProjectDetailed data={Config.projects[0]} />
        </Route>
        <Route exact path="/projectDetailedActive">
          <ProjectDetailed data={Config.projects[1]} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
