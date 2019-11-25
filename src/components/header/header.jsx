import React from 'react';
import Logo from "./logo";
import "./header.css"
import {Container, Nav, Navbar} from "react-bootstrap";
import {headerData} from '../../app_data/headerData';
import NavbarItem from "./NavbarItem";
import {Link} from "react-router-dom";



class Header extends React.Component{
    render() {
        return(
            <div className={'header'} id={'header'}>
                <Navbar expand="lg">
                    <Container>

                    <Navbar.Brand><Link to="/"><Logo/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {headerData.map((item,i)=><NavbarItem item={item} key={i}/>)}
                        </Nav>
                        <Nav className="ml-auto">
                            <Nav.Link href="#home"><i className="fas fa-mobile-alt d-flex align-items-center"/></Nav.Link>
                            <Nav.Link  href="#link">Ziv</Nav.Link>
                            <div className={'divider'}/>
                            <Nav.Link href="#link" className={"adv"}>Advertise</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                    </Container>


                </Navbar>

                {/*<NavbarContent />*/}
            </div>
        )
    }
}
export default Header;