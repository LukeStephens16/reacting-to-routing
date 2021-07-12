import React, { Component, Fragment } from "react";
import FilmsCard from "./FilmsCard";



class Films extends Component {
  constructor(props) {
    super(props);
    this.state = { films: [] };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(result => result.json())
      .then(films => {
        this.setState({ films });
      });
  }

  render() {
    return (
      <Fragment>
        {this.state.films.map(films => <FilmsCard key={films.id} value={films} />)}
      </Fragment>
    );
  }
}

export default Films;