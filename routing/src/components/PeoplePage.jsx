import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PeoplePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peopleArr: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((res) => this.setState({ peopleArr: res }))
      .catch((err) => console.log(err));
  }

  render() {
    return this.state.peopleArr.map((person) => (
      <React.Fragment>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{person.name}</h5>
            <p className="card-text">{person.age}, {person.gender}</p>
            <Link to={`/People/${person.id}`}>
              <button className="btn btn-primary">
                See more about this person
              </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    ));
  }
}

export default PeoplePage;