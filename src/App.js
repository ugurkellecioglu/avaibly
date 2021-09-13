import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { DashboardPage, Header, PrivateRoute, RegisterLogin } from './Components';
import user from './helpers/user';


function App() {

  const [loggedIn, setloggedIn] = useState(false)

  useEffect(() => {
    setloggedIn(user())
  }, [])

  return (
    <>
      <div >
        <Header loggedIn={loggedIn} />
        <Switch >
          <Route
            render={(props) => (
              <RegisterLogin {...props} loggedIn={loggedIn} />
            )}
            path="/index.html" exact />
          <PrivateRoute loggedIn={loggedIn} path="/home" component={DashboardPage} exact />
        </Switch>
      </div>
    </>
  )
}

export default App;
