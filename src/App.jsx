import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Products from "./Components/Products/Products";
import Carousel from "./Components/Carousel/Carousel";

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path="/" Component={Home} exact>
          <Home />
        </Route>
        <Route path="/about" Component={About} exact>
          <About />
        </Route>
        <Route path="/contactus" Component={ContactUs} exact>
          <ContactUs />
        </Route>
        <Route path="/products" Component={Products} exact>
          <Products />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
