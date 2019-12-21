import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { addHero } from "../../redux/hero/actions";

type AppState = {
  name: string;
  power: string;
  powerLevel: number;
  description: string;
  formValidation: boolean;
};

// exporting unconnected AddHeroForm for testing purposes
export class AddHeroForm extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "",
      power: "",
      powerLevel: 0,
      description: "",
      formValidation: false
    };
  }

  updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: e.target.value
    } as Pick<AppState, any>);
  };

  addHero = () => {
    const { name, power, powerLevel, description } = this.state;
    if (!name || !power || !powerLevel) {
      this.setState({
        formValidation: true
      });
    } else {
      const newHero = {
        name,
        power,
        powerLevel,
        description
      };
      this.props.addHero(newHero);
      this.setState({ formValidation: false });
    }
  };

  render() {
    let errorMessage;

    if (this.state.formValidation) {
      errorMessage = (
        <p style={{ color: "red" }}>
          Name, Power, and Power Level is required (Description optional).
        </p>
      );
    } else {
      errorMessage = null;
    }

    return (
      <div
        className="add-hero-list card shadow rounded p-4 mb-2"
        data-test="addHeroForm"
      >
        <div className="form-group row">
          <div className="col-lg-2">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={this.updateState}
            />
          </div>
          <div className="col-lg-2">
            <label>Power</label>
            <input
              type="text"
              className="form-control"
              name="power"
              onChange={this.updateState}
            />
          </div>
          <div className="col-lg-2">
            <label>Power Level</label>
            <input
              type="number"
              className="form-control"
              name="powerLevel"
              onChange={this.updateState}
            />
          </div>
          <div className="col-lg-4">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={this.updateState}
            />
          </div>
          <div className="col-lg-2" style={{ alignSelf: "flex-end" }}>
            <button onClick={this.addHero} className="btn btn-primary">
              Add Hero
            </button>
          </div>
        </div>
        {errorMessage}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { heroList } = state.hero;
  return { heroList };
};

export default connect(mapStateToProps, { addHero })(AddHeroForm);
