import React from 'react';
import './App.css';
import Gallery from "./components/gallery/gallery";
import UserPage from "./components/user/UserPage";
import Header from "./components/header/header";
import './style/loader.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./components/homePage/homaPage";
import Apartment from "./components/singleApartment/apartment";
import PrivateRoute from './components/PrivateRoute';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
        // loadData(this.onSuccess);
    }

    render() {

        return (
            <Router>
                <div>
                    <Header />

                    {this.state.loading
                        ?

                        <Switch>
                            <Route path="/search/:searchValue" component={Gallery} />
                            <Route path="/search" component={Gallery} />
                            <PrivateRoute path="/user" component={UserPage} />
                            <Route path="/singleApartment/:id" component={Apartment} />
                            <Route path="/singleApartment" component={Apartment} />
                            <Route path="/" exact component={HomePage} />
                        </Switch>
                        :
                        <div className="loader">Loading...</div>}

                </div>
            </Router>
        )
    }

    onSuccess = () => {
        this.setState({ loading: true });

    }
}


export default App;
