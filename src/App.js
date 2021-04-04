import './App.css';
import Titlebar from './components/Titlebar/Titlebar';
import LoginForm from './components/LoginForm/LoginForm';

function App() {
  let isLoggedIn = false;

  return (
    <div className="App">
      <Titlebar />
      <header className="App-header">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        {isLoggedIn ?
          <div>
            Welcome
          </div>
        :
          <LoginForm />
        }
      </header>
    </div>
  );
}

export default App;
