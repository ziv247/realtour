import React, {Component} from 'react';
import {Fade, Nav} from "react-bootstrap";
import NavbarContent from "./navbarContent";

export default class NavbarItem extends Component{

   constructor(props){
       super(props);
       this.state = {
           show:false
       }
   }


    render() {
        const {item} = this.props;
        const {show} = this.state;
        return(
            <Nav.Link href={item.herfLink}
                      onMouseOver={()=>{this.setState({show:true});}}
                      onMouseOut={()=>{
                          this.setState({show:false})
                      }}>
                {item.mainTitle}
                <Fade in={show}  unmountOnExit={true} >
                        <NavbarContent  menuContent={item.menuContent} />
                    </Fade>

            </Nav.Link>


        );
    }
}