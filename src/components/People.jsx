import React, { Component, Fragment } from "react";
import PeopleCard from "./PeopleCard";



class People extends Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then(result => result.json())
      .then(people => {
        this.setState({ people });
      });
  }

  render() {
    return (
      <Fragment>
        {this.state.people.map(people => <PeopleCard key={people.id} value={people} />)}
      </Fragment>
    );
  }
}

export default People;