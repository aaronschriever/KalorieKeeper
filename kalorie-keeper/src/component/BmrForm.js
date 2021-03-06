import React, { Component } from "react";
import calculateBMR from "../logic/calculateBMR";
import Switch from "react-switch";
import styles from "../styles/styles"
//import { Spring } from "react-spring";


class BmrForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFemale: false,
      height: "",
      weight: "",
      age: "",
      bmr: ""
    };
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBMRChange = this.handleBMRChange.bind(this);
  }
  sendBMRAlert() {
    alert(
      "calculating bmr with weight:" +
        this.state.weight +
        " height: " +
        this.state.height +
        " age: " +
        this.state.age +
        " female: " +
        this.state.isFemale +
        " BMR : " +
        this.state.bmr
    );
  }
  handleGenderChange(changeEvent) {
    this.setState({ isFemale: !this.state.isFemale });
  }
  handleBMRChange(event) {
    event.preventDefault();
    this.setState(
      {
        bmr: calculateBMR(
          parseInt(this.state.weight,10),
          parseInt(this.state.height,10),
          parseInt(this.state.age,10),
          this.state.isFemale
        )
      },
      () => this.sendBMRAlert()
    );
  }
  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  render() {
    return (
      <div className="bmr-form" style={{...styles.form}}>
        <form onSubmit={this.handleBMRChange}>
          <div>
          <h3>Calculate your BMR (Basal Metabolic Rate)</h3>
          <div>
            <label>
          Male
            <Switch
            uncheckedIcon={false}
            checkedIcon={false}
            offColor={"#A1D2CE"}
            onColor={"#DF3B57"}
            offHandleColor={"#5497A7"}
            onHandleColor={"#FFC6D9"}
          onChange={this.handleGenderChange}
          checked={this.state.isFemale}
          id="normal-switch"
        />
              Female
            </label>
            </div>
            <div>
            <input style={{...styles.dataEntry}}
              className="data-entry"
              name="height"
              type="number"
              onChange={this.handleInputChange}
              value={this.state.height}
            />
            <label> height &#40;cm&#41; </label>
            </div>
            <div>
            <input style={{...styles.dataEntry}}
              className="data-entry"
              name="weight"
              type="number"
              onChange={this.handleInputChange}
              value={this.state.weight}
            />
            <label> weight &#40;kg&#41; </label>
            </div>
            <div>
            <input style={{...styles.dataEntry}}
            className="data-entry"
              name="age"
              type="number"
              onChange={this.handleInputChange}
              value={this.state.age}
            />
            <label> age &#40;years&#41; </label>
            </div>
          </div>
          <div>
            <input style={{...styles.submitButton}} 
            type="submit" 
            value="Save" />
          </div>
        </form>
      </div>
    );
  }
}
export default BmrForm;
