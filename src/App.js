import React from 'react';
import './App.css';
import Gallery from "./components/gallery/gallery";
import Header from "./components/header/header";
import './style/loader.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import HomePage from "./components/homePage/homaPage";
import Apartment from "./components/singleApartment/apartment";
import {fullApartmentList, getApartments, loadData} from "./app_data/servelCall";
import Login from "./components/login/login";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
        loadData(this.onSuccess);
    }

    render() {

        return (
            <Router>
                <div>
                    <Header/>
                    <Login/>
                    {this.state.loading
                        ?

                        <Switch>
                            <Route path="/search/:searchValue" component={Gallery}/>
                            <Route path="/search" component={Gallery}/>
                            <Route path="/singleApartment/:id" component={Apartment}/>
                            <Route path="/singleApartment" component={Apartment}/>
                            <Route path="/" exact component={HomePage}/>
                        </Switch>
                        :
                        <div className="loader">Loading...</div>}

                </div>
            </Router>
        )
    }

     onSuccess=()=> {
        this.setState({loading:true},() => console.log(getApartments()));

    }
}


export default App;
