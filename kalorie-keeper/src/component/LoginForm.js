import React, { Component } from 'react';

class LoginForm extends Component {
constructor(props){
    super(props);
    this.state = {
        userName:"", 
        password:"",
    }
}
    render()
{
    return (
        <div>
            <form>
                <label>Username</label>
                <input type="text" required></input>
                <label>Password</label>
                <input type="password" minLength="8" required></input>
                <input type="submit" value="sign in" ></input>
            </form>
        </div>
    )
}

}

export default LoginForm