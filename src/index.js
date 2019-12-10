import React from 'react';
import ReactDOM from 'react-dom';
import Car from './App.js';
// import './main-scss';

class Garage extends React.Component {
  render() {
    return (
      <div>
	      <h1>Who lives in my Garage {this.props.color}?</h1>
	      <Car />
      </div>
    );
  }
}

ReactDOM.render(<Garage color="red"/>, document.getElementById('root'));