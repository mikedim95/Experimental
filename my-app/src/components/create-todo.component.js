import React, { Component } from 'react';
import logo from "./logo.png";


export default class CreateTodo extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            Username: '',
            Password: '',
            todo_priority: '',
            todo_completed: false
        }
        
    }
    onChangeTodoDescription(e) {
        this.setState({
            Username: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            Password: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.Username}`);
        console.log(`Todo Responsible: ${this.state.Password}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        
        this.setState({
            Username: '',
            Password: '',
            todo_priority: '',
            todo_completed: false
        })
    }
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Member Signup</h3>
                <form className ="registe-container" onSubmit={this.onSubmit}>
                    <div className="row text-center google-btn-desktop">
                    <img id="google_login" ng-click="$ctrl.googleLogin()" src="logo.png"/>


                    </div>
                    <div className="form-group"> 
                        <label>Username: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.Username}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Password}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <div className="form-group">
                        <label>e-mail: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.Password}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>
                    <label>Choose: </label>
                    <div className="form-group">
                   
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.todo_priority==='Option1'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Option1</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.todo_priority==='Option2'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Option2</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.todo_priority==='Option3'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Option3</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>
                
            </div>
        )
    }


     
}
