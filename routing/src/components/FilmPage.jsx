import React, { Component } from "react";
import { Link } from "react-router-dom";

class FilmPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmArr: [],
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((res) => this.setState({ filmArr: res }))
      .catch((err) => console.log(err));
  }

  render() {
    return this.state.filmArr.map((film) => (
      <React.Fragment>
        <div className="card" id={film.id}>
          <div className="card-body">
            <h5 className="card-title">{film.title}</h5>
            <p className="card-text">{film.description}</p>
            <Link to={`/Film/${film.id}`}>
              <button className="btn btn-primary">
                See more about this Film
              </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    ));
  }
}

export default FilmPage;
