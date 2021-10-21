import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "./components/UI/navbarUI/Navbar";

//Import Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Categories from "./pages/categories/Categories";
import ProductDetail from "./pages/productDetail/ProductDetail";
import Cart from "./pages/cart/Cart";
import Summary from "./pages/summary/Summary";

//Import Components
import Footer from "./components/UI/footerUI/Footer";
import ErrorPage from "./pages/errorPage/ErrorPage.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/details/:id" component={ProductDetail} />
        <Route path={`/categories/:category`} component={Categories} />
        <Route path={`/cart`} component={Cart} />
        <Route path={`/summary`} component={Summary} />
        <Route path="/404" component={ErrorPage} />
        <Redirect from="*" to="/404" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
