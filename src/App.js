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

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                    <Switch>
                        <Route path="/search">
                            <Gallery/>
                        </Route>

                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>

                </div>
            </Router>
        )
    }
}
function Home() {
    return (

        <Link to="/search">Search</Link>
    );
}

export default App;
