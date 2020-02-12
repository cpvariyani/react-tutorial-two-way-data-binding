import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Employee from './Employee/Employee';

// function App() {
//   return <div className="App">This is react example.</div>;
// }

class App extends Component {
  state = {
    employees: [
      {
        Name: 'CP Variyani',
        Skills: 'React, C# ,Angular'
      },
      {
        Name: 'Vibhu',
        Skills: 'React, Html, CSS'
      }
    ],

    heading: 'This is react example'
  };

  UpdateEmployeeDataHandler = updatedNewName => {
    console.log('it is clicked');

    this.setState({
      employees: [
        {
          Name: updatedNewName,
          Skills: 'React'
        },
        {
          Name: updatedNewName,
          Skills: 'React'
        }
      ]
    });
  };

  updateMynameHandler = event => {
    console.log('it is clicked');

    this.setState({
      employees: [
        {
          Name: event.target.value,
          Skills: 'React'
        },
        {
          Name: 'Vibhu',
          Skills: 'React'
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>List of Employees</h1>

        <button onClick={this.UpdateEmployeeDataHandler}>
          Update Employee Data
        </button>
        <span>{this.state.heading}</span>
        <Employee
          Name={this.state.employees[0].Name}
          Skills={this.state.employees[0].Skills}
          changemyname={this.updateMynameHandler}
          clickabc={this.UpdateEmployeeDataHandler.bind(this, 'Manish')}
        />
        <Employee
          Name={this.state.employees[1].Name}
          Skills={this.state.employees[1].Skills}
          clickabc={this.UpdateEmployeeDataHandler.bind(this, 'Suyash')}
        />
      </div>
    );
  }
}

export default App;
