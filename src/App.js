import React, { Component } from 'react';
import SearchResults from "./components/SearchResults";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Let's Search</h1>
            <p className="lead">Find what you're looking for with ease!</p>
            <div className="input-group mb-3">
              <input type="text" class="form-control" placeholder="Enter sprit name here" aria-label="liquor-name" aria-describedby="basic-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
              </div>
            </div>
          </div>
        </div>
        <SearchResults/>
      </div>
    );
  }
}

export default App;
