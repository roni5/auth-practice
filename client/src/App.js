import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "components/views/LandingPage/LandingPage";
import LoginPage from "components/views/LoginPage/LoginPage";
import RegisterPage from "components/views/RegisterPage/RegisterPage";
import Auth from "hoc/Auth";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Auth(LandingPage, null)} />
      <Route exact path="/login" component={Auth(LoginPage, false)} />
      <Route exact path="/register" component={Auth(RegisterPage, false)} />
    </Switch>
  );
}

export default App;
