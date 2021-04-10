import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CounterComponent from "./components/counter/CounterComponent";
import TodoListComponent from "./components/todolist/TodoListComponent";
import Quote from "./components/quote/Quote";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/counter" component={CounterComponent} />
        <Route path="/todolist" component={TodoListComponent} />
        <Route path="/quote" component={Quote} />
        <Route path="/caculator" />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
