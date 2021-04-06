import logo from './logo.svg';
import styles from './App.scss';
import { BrowserRouter, Route, Switch, useRouteMatch } from 'react-router-dom'
import Library from './Library'

function App() {
  return (
    <BrowserRouter className={styles.app}>
      <Switch>
        <Route exact path="/">
          <Library />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
