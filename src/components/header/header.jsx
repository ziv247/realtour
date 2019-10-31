import React from 'react';
import Logo from "./logo";
import "./header.css"
import NavbarItem from "./NavbarItem";

class Header extends React.Component{
    render() {
        return(
            <div className={'header'}>
                <nav className="navbar navbar-expand-lg navbar-light">


                    <a className="navbar-brand" href="#"><Logo/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavbarItem title={'Buy'}/>
                            </li>
                            <li className="nav-item">
                                <NavbarItem title={'Sell'}/>
                            </li>
                            <li className="nav-item ">
                                <NavbarItem title={'Rent'}/>
                            </li>
                            <li className="nav-item">
                                <NavbarItem title={'Mortgage'}/>
                            </li>
                        </ul>
                        {/*<form className="form-inline my-2 my-lg-0">*/}
                        {/*    <input className="form-control mr-sm-2" type="search" placeholder="Search"*/}
                        {/*           aria-label="Search">*/}
                        {/*        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>*/}
                        {/*    </form>*/}
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;