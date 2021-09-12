import { Route, Switch } from 'react-router';
import { DashboardPage, Header, RegisterLogin } from './Components';



function App() {
  return (
    <>
      <div >
        <Header />
        <Switch >
          <Route path="/index.html" component={RegisterLogin} exact />
          <Route path="/home" component={DashboardPage} exact />
        </Switch>
      </div>
    </>
  )
}

export default App;
