import React from 'react';
import './Employee.css';

const Employee = props => {
  return (
    <div className="card">
      <p>
        <span className="heading"> Name : </span> <span>{props.Name}</span>{' '}
      </p>
      <p>
        <span className="heading"> Skills : </span> <span>{props.Skills}</span>
      </p>
      <p>
        {' '}
        <input
          type="text"
          value={props.Name}
          onChange={props.changemyname}
        />{' '}
      </p>
      <button onClick={props.clickabc}>Employee Button</button>
    </div>
  );
};

export default Employee;
