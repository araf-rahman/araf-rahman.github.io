import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Works from "./pages/Works";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Footer from "./components/layouts/Footer";
import NotFound from "./pages/NotFound";
import "./App.scss";

function App() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const redirectTo = query.get("redirectTo");

  return (
    <div className="app">
      <Switch>
        {redirectTo && <Redirect to={redirectTo} />}
        <Route path="/Homepage" exact component={Homepage} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route path="/" exact>
          <Redirect to="/Homepage" />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer light />
    </div>
  );
}

export default App;