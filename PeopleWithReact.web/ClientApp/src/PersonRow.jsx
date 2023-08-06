import React, { TableHTMLAttributes } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Row extends React.Component {
    
    buildTable = (person) => {
        if(person.age >= 65) {
            return (<tr className='table-danger'>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
        </tr>)
        }

        return (<tr>
        <td>{person.firstName}</td>
        <td>{person.lastName}</td>
        <td>{person.age}</td>
    </tr>)
    }

    render() {
        return (
           <tbody>
            {this.props.people.map(p =>this.buildTable(p))}
           </tbody>
        );
    }
};

export default Row;