import React, {Component} from "react";
import {Col} from "react-bootstrap";

export default class MenuContentList extends Component{
    render() {
        const {item} = this.props;

        return(
            <Col>
                <h4>{item.title}</h4>
                <ul className={'menuList'}>
                    {item.menuContent.map((link,i)=><li key={i}><a href={link.herfLink}>{link.title}</a></li>)}

                </ul>
            </Col>
        )
    }
// <li key={i}><a href={link.herfLink}>{link.title}</a></li>
}