import Main from './pages/Main';
import About from './pages/About';
import { Router, Route } from './router/router';
import './App.css'

function App() {

  return (
    <div>
      <Router>
        <Route path="/" component={<Main />}></Route>
        <Route path="/about" component={<About />}></Route>
      </Router>
    </div>
  );
};

export default App
