import React from 'react';
import './App.css';
import Gallery from "./components/gallery/gallery";
import Header from "./components/header/header";
// import {cities} from "./app_data/cities";

class App extends React.Component{
  render() {
    return(
        <div>
            <Header/>
            <Gallery/>
        </div>
    )
  }
}

export default App;
