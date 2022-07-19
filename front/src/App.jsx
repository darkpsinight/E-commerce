import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Product/:id">
          <Product />
        </Route>
        <Route path="/Products/:category">
          <ProductList />
        </Route>
        <Route path="/Register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/Login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/Cart">
          <Cart />
        </Route>
        <Route exact path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
