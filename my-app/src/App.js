import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav className="flex bg-yellow-300">
            <div className="w-1/5">
              <h1 className="text-center">My App</h1>
            </div>
            <ul className="w-4/5 flex flex-row">
              <li className="w-1/4">
                <a
                  href="/counter"
                  className="inline-block w-full p-3 text-center hover:bg-yellow-500"
                >
                  Counter
                </a>
              </li>
              <li className="w-1/4">
                <a
                  href="/todolist"
                  className="inline-block w-full p-3 text-center hover:bg-yellow-500"
                >
                  Todolist
                </a>
              </li>
              <li className="w-1/4">
                <a
                  href="/quote"
                  className="inline-block w-full p-3 text-center hover:bg-yellow-500"
                >
                  Quote
                </a>
              </li>
              <li className="w-1/4">
                <a
                  href="/caculator"
                  className="inline-block w-full p-3 text-center hover:bg-yellow-500"
                >
                  Caculator
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>

      <Switch>
        <Route path="/counter"></Route>
        <Route path="/todolist"></Route>
        <Route path="/quote"></Route>
        <Route path="/caculator"></Route>
      </Switch>
    </Router>
  );
}

export default App;
