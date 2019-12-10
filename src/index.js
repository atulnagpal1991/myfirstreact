import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee.js';
import './main.scss';
import 'bootstrap/scss/bootstrap.scss';

class Company extends React.Component {
  render() {
    return (
      <div class="row">
	      <h1>Company Employee's</h1>
	      <Employee />
      </div>
    );
  }
}

ReactDOM.render(<Company/>, document.getElementById('root'));