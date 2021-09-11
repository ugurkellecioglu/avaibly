import { Route, Switch } from 'react-router';
import { Header, PageSelector, RegisterLogin } from './Components';



function App() {
  return (
    <>
      <div >
        <Header />
        <Switch >
          <Route path="/index.html" component={RegisterLogin} exact />
          <Route path="/home" component={PageSelector} exact />
        </Switch>
      </div>
    </>
  )
}

export default App;
