import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';



class Filters extends Component {

  render() {
    return (
      <>
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
              <input  id="species-1" type="checkbox" value="Human"/>
              <label for="species-1">Human</label>
              <input  id="species-2" type="checkbox" value="Alien"/>
              <label for="species-2">Alien</label>
              <input  id="species-3" type="checkbox" value="Other"/>
              <label for="species-3">Other</label>
            </div>
          </div>
          <div className="filter-gender">
					 <h6>Gender</h6>
            <div className="styled-checkbox">
              <input  id="gender-1" type="checkbox" value="Male"/>
              <label for="gender-1">Male</label>
              <input  id="gender-2" type="checkbox" value="Female"/>
              <label for="gender-2">Female</label>
            </div>
          </div>
          <div className="filter-origin">
           <h6>Origin</h6>
            <div className="styled-checkbox">
              <input  id="origin-1" type="checkbox" value="Earth (C-137)"/>
              <label for="origin-1">Earth (C-137)</label>
              <input  id="origin-2" type="checkbox" value="Earth (Replacement Dimension)"/>
              <label for="origin-2">Earth (Replacement Dimension)</label>
              <input  id="origin-3" type="checkbox" value="Abadango"/>
              <label for="origin-3">Abadango</label>
              <input  id="origin-4" type="checkbox" value="unknown"/>
              <label for="origin-4">unknown</label>
            </div>
          </div>
        </div>
			</SideNav>
		</div>
		<div className="selected-filters pt-3">
			<h5>Selected Filters</h5>
			<div className="col">
        <div className="row">
  				<div class="alert alert-success alert-dismissible mr-1">
  					<button type="button" class="close" data-dismiss="alert">&times;</button>
  					<strong>Success!</strong>
  				</div>
  				<div class="alert alert-success alert-dismissible mr-1">
  					<button type="button" class="close" data-dismiss="alert">&times;</button>
  					<strong>Success!</strong>
  				</div>
        </div>
			</div>
		</div>
		<div className="search-name">
			<h6>Search By Name</h6>
			<div className="row">
				<div className="col">
					<input className="form-control" placeholder="Name" type="text"/>
					<button className="btn btn-primary">Search</button>
				</div>
				<div className="col-auto ml-auto">
					<select className="form-control">
						<option selected disabled>Sort By Id</option>
						<option>Ascending</option>
						<option>Descending</option>
					</select>
				</div>
			</div>
		</div>
      </>
    );
  }
}

export default Filters;
