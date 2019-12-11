import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee.js';
import Filters from './Filters.js';
import 'bootstrap/scss/bootstrap.scss';
import './main.scss';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



class Company extends Component {
	constructor() {
    super();
    this.state = { employees: [] };
  }

componentDidMount() {
  fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then((data) => {
          console.log('Data', data)
          this.setState({
          	employees:data.results
          })
      })
      .catch((error) => {
          console.log('error', error)
      })
}

  render() {
    return (
      <div className="container-fluid company-employees">
      <Filters/>
	      <div className="row">
	      		<Employee employees={this.state.employees} />
	      </div>
      </div>
    );
  }
}

ReactDOM.render(<Company/>, document.getElementById('root'));