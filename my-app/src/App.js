import React from 'react';
import AxiosFetch from "./components/AxiosFetch";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: ""
    };
  }

  render() {
    return (
      <div className="App">
            <AxiosFetch 
              followers={this.state.followers}
            />
      </div>
    );
  }
}

export default App;