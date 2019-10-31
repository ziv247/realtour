import React from 'react';
import {apartments} from "../app_data/apatments";
import Card from "./card";

class Gallery extends React.Component{
    render() {
        return(
            <div className={'row'}>
                {apartments.map((item,i)=><Card item={item} key={i}/>)}

            </div>
        )
    }

}

export default Gallery;
