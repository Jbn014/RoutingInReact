import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SingleFilm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      film: {},
    };
  }

  componentDidMount() {
    fetch(`https://ghibliapi.herokuapp.com/films/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => this.setState({ film: res }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="card" id={this.state.film.id}>
        <div className="card-body">
          <h5 className="card-title">{this.state.film.title}</h5>
          <p className="card-text">{this.state.film.description}</p>

          <Link href={`/Film/${this.state.film.url}`}>
            <button className="btn btn-primary">
              See more about this Film
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default SingleFilm