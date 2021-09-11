import './App.css';
import { Header, PageSelector, RegisterLogin } from './Components';



function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div>
        <Header />
        <RegisterLogin />
      </div>
      <div>
        <Header />
        <PageSelector />
      </div>

    </div>
  )
}

export default App;
