import React, { Component } from "react";

// Redux
import { connect } from "react-redux";
import { deleteHero, selectHero, sortId, sortName, sortPower } from "../../redux/actions";

// Components
import { SuperheroProfile } from "../../components/superheroProfile";

// Interfaces
import Hero from "../../interfaces/Hero.interface";

export class SuperheroList extends Component<any, any> {
  deleteHero = (e: any) => {
    this.props.deleteHero(e.target.value);
  };

  selectHero = (e: any) => {
    this.props.selectHero(e.target.value);
  };

  sortById = () => {
    this.props.sortId();
  };

  sortByName = () => {
    this.props.sortName();
  };

  sortByPower = () => {
    this.props.sortPower();
  };

  render() {
    const { heroList, selected } = this.props;
    const ListHeroes = heroList.map((hero: Hero) => {
      return (
        <SuperheroProfile
          {...hero}
          deleteHero={e => this.deleteHero(e)}
          selectHero={e => this.selectHero(e)}
        />
      );
    });

    const SelectedHeroes = selected.map((hero: Hero) => {
      return (
        <div className="col-lg-4 mb-4">
          <p>
            <b>Name:</b> {hero.name}
          </p>
          <p>
            <b>Power:</b> {hero.power}
          </p>
          <p>
            <b>Power Level:</b> {hero.powerLevel}
          </p>
        </div>
      );
    });

    return (
      <div className="superhero-list card shadow rounded p-4" data-test='superheroList'>
        <div className="row">
          <h1 className="mb-4 ml-3">Choose Your Superheroes!</h1>
        </div>
        <p>
          <b>You've chosen: </b>
        </p>
        <div className="row">{SelectedHeroes}</div>
        <div className="btn-group" role="group">
          <button className="btn btn-light" onClick={this.sortById}> Sort by ID</button>{" "}
          <button className="btn btn-light" onClick={this.sortByName}> Sort by Name</button>{" "}
          <button className="btn btn-light" onClick={this.sortByPower}> Sort by Power Level</button>{" "}
        </div>
        {ListHeroes}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const { heroList } = state.hero;
  const { selected } = state.hero;
  return { heroList, selected };
};

export default connect(mapStateToProps, { deleteHero, selectHero, sortId, sortName, sortPower })(
  SuperheroList
);
