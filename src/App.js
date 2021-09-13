import { useState } from 'react';
import { Route, Switch } from 'react-router';
import { DashboardPage, Header, PrivateRoute, RegisterLogin } from './Components';


function App() {

  return (
    <>
      <div >
        <Header />
        <Switch >
          <Route path="/index.html" component={RegisterLogin} exact />
          <PrivateRoute path="/home" component={DashboardPage} exact />
        </Switch>
      </div>
    </>
  )
}

export default App;
