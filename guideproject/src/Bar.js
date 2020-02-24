import React from 'react';
import TouristPoint from './TouristPoint';
import Fave from './Fave';
import Home from './Home';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class Bar extends React.Component {
    constructor(props) {
    super(props)
    }

render() {
 return (
        
<Router>
<nav>
  <Link to="/exact">Home</Link>{' '}
  <Link to="/TouristPoint">TouristPoint</Link>{' '}
  <Link to="/Fave">Fave</Link>
</nav>
<div>
  <Route  path="/Home" component={Home} />
  <Route path="/TouristPoint" component={TouristPoint} />
  <Route path="/Fave" component={Fave} />
</div>
</Router>)

        /*const AllCountry = this.props.name.map(function(country, index) {
        return <TouristPoint name = { country }
        key = { index } />;})
        const Fave = this.props.name.map(function(fave, index) {
     return <Fave name = { fave }
     key = { index }
                                            />;})
                                            return { Fave }


                                        }
                                    }*/
    }
}