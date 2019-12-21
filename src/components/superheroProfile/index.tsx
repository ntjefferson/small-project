import React from "react";
import Hero from "../../interfaces/Hero.interface";

export const SuperheroProfile: React.FC<Hero> = props => {
  return (
    <div className="card shadow mt-2 mb-2 p-4" data-test="superheroProfile">
      <div className="row">
        <div className="col-md-1">
          <p>ID</p>
          <p>
            <b>{props.id}</b>
          </p>
        </div>
        <div className="col-md-2">
          <p>Name</p>

          <p>
            <b>{props.name}</b>
          </p>
        </div>
        <div className="col-md-3">
          <p>Power</p>

          <p>
            <b>{props.power}</b>
          </p>
        </div>
        <div className="col-md-2">
          <p>Power Level</p>
          <p>
            <b>{props.powerLevel}</b>
          </p>
        </div>
        <div className="col-md-3">
          <p>Description</p>

          <p>
            <b>{props.description}</b>
          </p>
        </div>
        <div className="col-md-1">
          <button
            onClick={props.selectHero}
            value={props.id}
            className="btn btn-success mb-2"
          >
            {props.selected ? "Deselect" : "Select"}
          </button>
          <button
            onClick={props.deleteHero}
            value={props.id}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
