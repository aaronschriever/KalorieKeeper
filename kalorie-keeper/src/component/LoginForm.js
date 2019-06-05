import React, { Component } from 'react';
import styles from "../styles/styles";
class LoginForm extends Component {
constructor(props){
    super(props);
    this.state = {
        userName:"", 
        password:"",
    }
    this.handleInputChange = this.handleInputChange.bind(this);
}
handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
    render()
{
    return (
        <div>
            <form style={{...styles.form}}>
                <div>
                <label>Username</label>
                <input name="userName" style={{...styles.dataEntry}} type="text"  onChange={this.handleInputChange} value={this.state.userName} required></input>
                </div>
                <div>
                <label>Password</label>
                <input name="password" style={{...styles.dataEntry}} type="password" minLength="8"  onChange={this.handleInputChange} value={this.state.password} required></input>
                </div>
                <input style={{...styles.submitButton}} type="submit" value="sign in"  ></input>
            </form>
        </div>
    )
}

}

export default LoginForm;