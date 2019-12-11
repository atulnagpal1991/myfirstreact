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
        <div className="filter-option">
          <hr/>
					<h6>Species</h6>
          <label><input type="checkbox" value="Human"/><span>Human</span></label>
          <label><input type="checkbox" value="Alien"/><span>Alien</span></label>
          <label><input type="checkbox" value="Other"/><span>Other</span></label>
          <hr/>
					<h6>Gender</h6>
          <label><input type="checkbox" value="Male"/><span>Male</span></label>
          <label><input type="checkbox" value="Female"/><span>Female</span></label>
        </div>
			</SideNav>
		</div>
		<div className="selected-filters">
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
