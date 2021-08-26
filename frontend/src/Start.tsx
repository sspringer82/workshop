import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth } from './AuthContext';
import List from './List';
import Login from './Login';

function Start(): React.ReactElement {
  const [auth] = useAuth();

  return (
    <Router>
      <Switch>
        <Route path="/new" component={List} />
        <Route
          path="/"
          exact
          render={() => {
            if (!auth) {
              return <Login />;
            } else {
              return <List />;
            }
          }}
        />
      </Switch>
    </Router>
  );
}

export default Start;
