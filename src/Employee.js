import React from 'react';
import moment from 'moment';

class Employee extends React.Component {
	render() {
		return (
			<>
				{
					this.props.employees && this.props.employees.length > 0 && this.props.employees.map((employee, index) => {
						return (
							!employee.isHide ? <div className="employee-details col-sm-6 col-md-4 col-lg-3" key={`employee-list-${index}`}>
								<div className="card">
									<div className="position-relative">
										<img className="card-img-top" alt={employee.name} src={employee.image}/>
										<div className="basic-info">
											<div className="">
												<span className="employee-name">{employee.name}</span>
												<span className="employee-gender">({employee.gender})</span>
											</div>
											<div>
												<span className="employee-id">Id: {employee.id} - </span>
												<span className="employee-created">{moment(employee.created).fromNow()}</span>
											</div>
										</div>
									</div>
									<div className="employee-status"><label>Status:</label><span>{employee.status}</span></div>
									<div className="employee-species"><label>Species:</label><span>{employee.species}</span></div>
									<div className="employee-origin"><label>Origin:</label><span>{employee.origin && employee.origin.name}</span></div>
									<div className="employee-location"><label>Last Location:</label><span>{employee.location && employee.location.name}</span></div>
								</div>
							</div>
								: null
						)
					})
				}
			</>
		);
	}
}

export default Employee;
