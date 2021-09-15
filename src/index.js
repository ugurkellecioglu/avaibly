import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.FADE,
  containerStyle: { color: 'white' }
}

const AlertTemplate = ({ style, options, message, close }) => (
  <div style={style}>
    {options.type === 'info' && '!'}
    {options.type === 'success' && ':)'}
    {options.type === 'error' && ':('}
    {message}
    <button onClick={close}>X</button>
  </div>
)

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <Router>
        <AlertProvider template={AlertTemplate}>
          <App />
        </AlertProvider>
      </Router>
    </Provider >

  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
