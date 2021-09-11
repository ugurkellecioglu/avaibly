import { Route, Switch } from 'react-router';
import './App.css';
import { Header, PageSelector, RegisterLogin } from './Components';



function App() {
  return (
    <>
      <div >
        <Header />
        <Switch >
          <Route path="/" component={RegisterLogin} exact />
          <Route path="/home" component={PageSelector} exact />
        </Switch>
      </div>
    </>
  )
}

export default App;
