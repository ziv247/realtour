import React from 'react';
import './App.css';
import Gallery from "./components/gallery/gallery";
import Header from "./components/header/header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import HomePage from "./components/homePage/homaPage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/search/:searchValue" component={Gallery} />
                        <Route path="/search" component={Gallery} />
                        <Route path="/" exact component={HomePage}/>
                    </Switch>

                </div>
            </Router>
        )
    }
}



export default App;
