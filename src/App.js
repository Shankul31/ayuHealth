import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./componets/profile/Profile";
import Comments from "./componets/comments/Comments";
import Posts from "./componets/posts/Posts";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/comments">
            <Comments />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
