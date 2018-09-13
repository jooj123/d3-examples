import Select from 'react-select';
import React, { Component } from 'react';
import RefD3Render from './demos/RefD3Render';
import ReactRender from './demos/ReactRender';

import logo from './logo.svg';
import './App.css';

const options = [
  { value: 'ref', label: 'Use Ref & D3 Render' },
  { value: 'react', label: 'React Render' }
];

class App extends Component {
  state = {
    selectedValue: ''
  };

  onChange = selected => {
    this.setState({
      selectedValue: selected.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>D3 with React Demos</h1>
        <Select
          placeholder="Please select which demo to run ..."
          options={options}
          onChange={this.onChange}
        />

        {this.state.selectedValue !== '' && (
          <input
            placeholder="Enter a location"
            type="text"
            className="App-textbox"
          />
        )}

        <div className="App-chart-container">
          {this.state.selectedValue === 'ref' && (
            <RefD3Render data={[5, 10, 1, 3]} size={[500, 500]} />
          )}
          {this.state.selectedValue === 'react' && <ReactRender />}
        </div>
      </div>
    );
  }
}

export default App;
