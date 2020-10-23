import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import FilmPage from './FilmPage'
import PeoplePage from './PeoplePage'
import SingleFilm from './SingleFilm'
import SinglePerson from './SinglePerson'

class App extends Component {
    render () {
        return (
            <Router>
                <Fragment>
                    <button>
                    <Link to='/Film'>Go to Film Page</Link>
                    </button>
                    <button>
                    <Link to='/People'>Go to People Page</Link>
                    </button>
                    <Switch>
                        <Route exact path='/Film' component={FilmPage}/>
                        <Route exact path='/People' component={PeoplePage}/>
                        <Route path='/Film/:id' component={SingleFilm}/>
                        <Route path='/People/:id' component={SinglePerson}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default App