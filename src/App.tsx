import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SuperheroList from "./containers/superheroList";
import AddHeroForm from "./containers/addHeroForm";
import "./App.css";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <AddHeroForm />
          <SuperheroList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
