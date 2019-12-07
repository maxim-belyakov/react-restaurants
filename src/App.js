import React, { Component } from "react";
import "./App.css";
import Logo from "./icon-restaurant.png"
import CurrentContainer from "./containers";
import { loadData, extendRestaurantsData } from "./storage";

const useMockData = true; // Todo: set false for production

class App extends Component {
  state = {
    isDebug: false
  }

  componentWillMount() {
    loadData(useMockData);   // Load Mock data
    extendRestaurantsData(); // Extend data for Restaurants
  }

  onDebugChange = event => {
    let flag = event.target.value;
    if (event.target.type === 'checkbox') flag = event.target.checked;
    this.setState({isDebug: flag});
  };

  render() {
    return (
      <div className="App">
        <header>
          <img className="logotype rotate" src={Logo} alt="Logotype"/>
          <h1>Restaurants</h1>

          <div className="debug">
            <label>
              <input type="checkbox" checked={this.state.isDebug} onChange={this.onDebugChange} />
              Show Debug Info
            </label>
          </div>
          
        </header>

        <CurrentContainer isDebug={this.state.isDebug} />

        <footer>
          <p>
            <a rel="noopener noreferrer" target="_blank" href="https://github.com/maxim-belyakov/react-restaurants">Source code on GitHub</a>{". "}
            Copyright &copy;{" "}<a rel="author noopener noreferrer" target="_blank" href="https://belyakov.site">Belyakov</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
