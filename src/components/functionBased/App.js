import logo from "../../logo.svg";
import "./App.css";
import TodoContainer from "./TodoContainer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  );
}

export default App;
