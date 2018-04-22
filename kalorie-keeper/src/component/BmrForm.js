import React, { Component } from 'react';


class BmrForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            genderSelected:'M',
            height:'',
            weight:'',
            age:''
        }
        this.handleGenderChange = this.handleGenderChange.bind(this);
    }
    handleGenderChange(changeEvent){
        this.setState({genderSelected: changeEvent.target.value});
    }
render(){
    return (
    <div className="bmr-form">
        <label>
            <input type="radio" group="gender" value="M" checked={this.props.genderSelected==='M'} onChange={this.handleGenderChange}/>Male
        </label>
    <label>
        <input type="radio" group="gender" value="F" checked={this.props.genderSelected==='F'}/>Female
    </label>
    <br/><input type="number"/>
    <label> height &#40;cm&#41; </label>
    <br/><input type="number"/>
    <label> weight &#40;kg&#41; </label>
    <br/><input type="number"/>
    <label> age &#40;years&#41; </label>
    </div>
    );
}
}
export default BmrForm;
