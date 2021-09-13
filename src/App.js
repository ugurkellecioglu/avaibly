import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router';
import { DashboardPage, Header, PrivateRoute, RegisterLogin } from './Components';
import user from './helpers/user';


function App() {


  return (
    <>
      <div >
        <Header />
        <Switch >
          <Route
            render={(props) => (
              <RegisterLogin {...props} />
            )}
            path="/index.html" exact />
          <PrivateRoute path="/home" component={DashboardPage} exact />
        </Switch>
      </div>
    </>
  )
}

export default App;
