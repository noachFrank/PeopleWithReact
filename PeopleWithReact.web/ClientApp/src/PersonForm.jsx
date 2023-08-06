import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class Buttons extends React.Component {

    render() {
        return (
        <div className='row'>
                    <div className='col-md-3'>
                        <input type='text' className='form-control' placeholder='First Name' onChange={this.props.onFirstChange} value={this.props.firstName}/>
                    </div>
                    <div className='col-md-3'>
                         <input type='text' className='form-control' placeholder='Last Name' value={this.props.lastName} onChange={this.props.onLastChange}/>
                    </div>
                    <div className='col-md-2'>
                        <input type='text' className='form-control' placeholder='Age' value={this.props.age} onChange={this.props.onAgeChange}/>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-success w-100' onClick={this.props.onAddClicked}>Add</button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn btn-danger w-100' onClick={this.props.onClearClicked}>Clear Table</button>
                    </div>
                </div>
            
        );
    }
};

export default Buttons;