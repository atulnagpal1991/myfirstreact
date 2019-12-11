import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee.js';
import SideNav from '@trendmicro/react-sidenav';

import 'bootstrap/scss/bootstrap.scss';
import './main.scss';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { customData } from './customData';


class Company extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      species: customData.species,
      gender: customData.gender,
      origin: customData.origin,
      sort: customData.sort,
      sortOrder: "",
      textToSearch: "",
      selectedSpices : []
      // originalEmployessArray
    };

    this._handleInputChange = this._handleInputChange.bind(this)
    this._handleFilterData = this._handleFilterData.bind(this)
  }

  componentDidMount() {
    fetch("https://rickandmortyapi.com/api/character/")
      .then(response => response.json())
      .then((data) => {
        console.log('Data', data)
        this.setState({
          employees: data.results
        })
      })
      .catch((error) => {
        console.log('error', error)
      })
  }

  _handleInputChange(e) {
    let name = e.target.name,
      value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
      [name]: value
    }, ()=> {
      this._handleFilterData();
    })
  }

  _handleFilterChange(stateVariable, valueToBe, e) {
    let dataToUpdate = this.state[stateVariable];
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    if(value) dataToUpdate.push(valueToBe)
    else dataToUpdate.splice(dataToUpdate.indexOf(valueToBe), 1)

    this.setState({
      [stateVariable]: dataToUpdate
    }, () => {
      this._handleFilterData();
    });
  }

  _handleFilterData() {
    let { textToSearch , employees, sortOrder, selectedSpices} = this.state;

      let regex = new RegExp(textToSearch, 'i')
      employees = employees.map((ele) => {
        ele.isHide = false;

        // Search filter
        if(textToSearch) ele.isHide = regex.test(ele.name) ? false : true
        
        // Spices Filter
        if(selectedSpices.length > 0 && !ele.isHide) {
          ele.isHide = selectedSpices.indexOf(ele.species) !== -1 ? false : true
        }
        
        return ele
      });

      //Sort
      employees.sort((a, b) => { 
        return sortOrder ===  "descending" ?  b.id - a.id : a.id - b.id 
      });

      this.setState({
        employees
      });
  }

  render() {
    let { species, gender, origin, sort, selectedSpices } = this.state
    return (
      <div className="container-fluid company-employees">
        <div className="sidebar">
          <SideNav
            onSelect={(selected) => {
              // on selected add here
            }}
          >
            <SideNav.Toggle>
              <span className="filters-open">Filters</span>
            </SideNav.Toggle>
            <div className="filter-options">
              <div className="filter-species">
                <h6>Species</h6>
                <div className="styled-checkbox">
                  {
                    species && species.length > 0 && species.map((specie, index) => {
                      return (
                        <React.Fragment key={`species-key-${index}`}>
                          <input 
                            id={`species-${index}`} 
                            type="checkbox" 
                            value={specie.value} 
                            checked={selectedSpices.indexOf(specie.value) !== -1 ? true: false}
                            onChange={this._handleFilterChange.bind(this , 'selectedSpices', specie.value)}
                          />
                          <label htmlFor={`species-${index}`}>{specie.display}</label>
                        </React.Fragment>
                      )
                    })
                  }
                </div>
              </div>
              <div className="filter-gender">
                <h6>Gender</h6>
                <div className="styled-checkbox">
                  {
                    gender && gender.length > 0 && gender.map((ele, index) => {
                      return (
                        <React.Fragment key={`gender-key-${index}`}>
                          <input id={`gender-${index}`} type="checkbox" value={ele.value} />
                          <label htmlFor={`gender-${index}`}>{ele.display} </label>
                        </React.Fragment>
                      )
                    })
                  }
                </div>
              </div>
              <div className="filter-origin">
                <h6>Origin</h6>
                <div className="styled-checkbox">
                  {
                    origin && origin.length > 0 && origin.map((org, index) => {
                      return (
                        <React.Fragment key={`origin-key-${index}`}>
                          <input id={`origin-${index}`} type="checkbox" value={org.value} />
                          <label htmlFor={`origin-  ${index}`}>{org.display}</label>
                        </React.Fragment>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </SideNav>
        </div>
        <div className="selected-filters py-3">
          <h5>Selected Filters</h5>
          <div className="col">
            <div className="row">
              <span className="badge badge-pill badge-success">Success Label <i className="close-filter"><img src="cancel.svg"/></i></span>
              <span className="badge badge-pill badge-success">Success Label <i className="close-filter"><img src="cancel.svg"/></i></span>
            </div>
          </div>
        </div>
        <div className="search-name">
          <h6>Search By Name</h6>
          <div className="row">
            <div className="col">
              <input 
                className="form-control" 
                placeholder="Name" 
                type="text" 
                name="textToSearch"
                value={this.state.textToSearch}
                onChange={this._handleInputChange}
              />
              <button className="btn btn-primary">Search</button>
            </div>
            <div className="col-auto ml-auto">
              <select
                className="form-control"
                value={this.state.sortOrder}
                onChange={this._handleInputChange}
                name="sortOrder"
              >
                <option disabled >Sort By Id</option>
                {
                  sort && sort.length > 0 && sort.map((ele, index) => {
                    return <option value={ele.value} key={`sort-${index}`}>{ele.display}</option>
                  })
                }
              </select>
            </div>
          </div>
        </div>
        <div className="row">
          <Employee employees={this.state.employees} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Company />, document.getElementById('root'));