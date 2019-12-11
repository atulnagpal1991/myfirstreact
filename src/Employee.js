import React from 'react';

class Employee extends React.Component {
  render() {
    console.log("eee" , this.props.employees);
    return (
    	<>
				{
				    this.props.employees && this.props.employees.length > 0 && this.props.employees.map((employee, index) => {
				        return (
				            <div className="employee-details col-6 col-lg-4 col-xl-3">
				           	 <div className="card">
					                <img className="card-img-top" src={employee.image}/>
					                <div className="employee-name">{employee.name} <span>{employee.gender}</span></div>
					                <div className="employee-id">{employee.id}</div>
					                <div className="employee-created">{employee.created}</div>
					             	 	<div className="employee-status"><label>Status</label><span>{employee.status}</span></div>
					              	<div className="employee-species"><label>Species</label><span>{employee.species}</span></div>
					             	 	<div className="employee-gender"><label>Gender</label><span>{employee.gender}</span></div>
					             	 	<div className="employee-origin"><label>Origin</label><span>{employee.origin && employee.origin.name}</span></div>
					             	 	<div className="employee-location"><label>Last Location</label><span>{employee.location && employee.location.name}</span></div>
				    	    	 </div>
				    	    	</div>
				        )
				    })
				}
    	</>
    	);
  }
}

export default Employee;
