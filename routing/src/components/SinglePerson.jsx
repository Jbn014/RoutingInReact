import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SinglePerson extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {},
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/people/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ person: res }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="card" id={this.state.person.id}>
        <div className="card-body">
          <h5 className="card-title">{this.state.person.name}</h5>
          <p className="card-text">{this.state.person.gender}, {this.state.person.age}, Eye Color: {this.state.person.eye_color}</p>

          <Link href={`/People/${this.state.person.url}`}>
            <button className="btn btn-primary">
              See more about this Person
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default SinglePerson