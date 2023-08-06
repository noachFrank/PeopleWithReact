import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Buttons from './PersonForm';
import PersonRow from './PersonRow';

class App extends React.Component {

    state = {
        firstName : '',
        lastName : '',
        age : '',
        people : []
    }

   onAddClicked = () => {
    const copy = [...this.state.people]
    let  person = {
        firstName : this.state.firstName,
        lastName : this.state.lastName,
        age : this.state.age}
    copy.push(person)

    this.setState({people : copy, firstName : '', lastName : '', age : ''})
   }

   onClearClicked = () => {
    this.setState({people : []})
   }

   onFirstChange = (e) => {
    this.setState({firstName : e.target.value})
   }

   onLastChange = (e) => {
    this.setState({lastName : e.target.value})
   }

   onAgeChange = (e) => {
    this.setState({age : e.target.value})
   }

   setTable = () => {
    if(this.state.people.length == 0){
        return <h1>No People Have Been Added, Be The First Right Now!!!!</h1>
    }

    return (<table className='table table-bordered table-striped table-hover'>
    <thead>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
        </tr>
    </thead>
    
        <PersonRow people={this.state.people}/>
    
  </table>)
   }

    render() {
        

       
        return (
        <div className='container mt-5'>
            <Buttons firstName={this.state.firstName} onFirstChange={this.onFirstChange}
             lastName={this.state.lastName} onLastChange={this.onLastChange}
              age={this.state.age}  onAgeChange={this.onAgeChange}
              onAddClicked={this.onAddClicked}
              onClearClicked={this.onClearClicked}/>
              
              <br/>
              
              {this.setTable()}
                
            </div>
            
        );
    }
   
};

export default App;