import React, { Component } from 'react';
import calculateBMR from '../logic/calculateBMR';

class BmrForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            genderSelected:'M',
            height:'',
            weight:'',
            age:'',
            bmr:''
        }
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBMRChange = this.handleBMRChange.bind(this);
    }
    handleGenderChange(changeEvent){
        this.setState({genderSelected: changeEvent.target.value});
    }
    handleBMRChange(event){
        const bmr = calculateBMR(this.state.weight, this.state.height, this.state.age, this.state.genderSelected);
        alert("calculating bmr with weight:"+this.state.weight + " height: " + this.state.height + " age: " + this.state.age + " gender: " + this.state.genderSelected);
        event.preventDefault();
        this.setState({bmr:bmr});
        alert(this.state.bmr);
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
          });
    }
render(){
    return (
    <div className="bmr-form">
    <form onSubmit={this.handleBMRChange}>
    <div>
        <label>
            <input type="radio" group="gender" value="M" checked={this.state.genderSelected==='M'} onChange={this.handleGenderChange}/>Male
        </label>
    <label>
        <input type="radio" group="gender" value="F" checked={this.state.genderSelected==='F'} onChange={this.handleGenderChange}/>Female
    </label>
    <br/><input name="height" type="number" onChange={this.handleInputChange}/>
    <label> height &#40;cm&#41; </label>
    <br/><input name="weight"type="number" onChange={this.handleInputChange}/>
    <label> weight &#40;kg&#41; </label>
    <br/><input name="age"type="number" onChange={this.handleInputChange}/>
    <label> age &#40;years&#41; </label>
    </div>
    <div>
    <input type="submit" value="SAVE" />
    </div>
    </form>
    </div>
    
);
}
}
export default BmrForm;
