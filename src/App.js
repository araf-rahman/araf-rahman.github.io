import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Footer from "./components/layouts/Footer";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Redirect to="Homepage" />
          </Route>
          <Route path="/Homepage" exact component={Homepage} />
          <Route path="/about" component={About} />
          <Route path="/works" component={Works} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" component={BlogDetail} />
        </Switch>
        <Footer light />
      </div>
    </BrowserRouter>
  );
}

export default App;