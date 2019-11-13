import React from 'react';
import '../../style/card.css';
import {ApartmentDetail, ApartmentHeart, ApartmentPrice, ApartmentType, GreenApartmentTitle} from "./cardStyle";
import {cities} from "../../app_data/cities";

class Card extends React.Component{
    render() {
        const {item} = this.props;
        return(
            <div className={"cardWrap col-xs-12 col-sm-6 col-lg-6 col-xl-4"}>
                <div className={"card"}>
                    <div className={"cardImageWrap"} >
                        <img className={"card-img-top"} src={`./${item.main_image}`}/>
                        <ApartmentHeart><i className="far fa-heart"/></ApartmentHeart>
                        <GreenApartmentTitle>new</GreenApartmentTitle>
                        <ApartmentDetail>
                            <ApartmentType>home for sale</ApartmentType>
                            <ApartmentPrice>${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</ApartmentPrice>
                        </ApartmentDetail>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li><span className="data-value">{item.number_of_beds}</span> Beds</li>
                            <li><span className="data-value">{item.number_of_rooms}</span> Rooms</li>
                            <li><span className="data-value">7500</span> Sqft</li>
                        </ul>

                        <div>{item.address}, {cities[item.cityId-1]["label"]}</div>


                    </div>
                </div>
            </div>
        )
    }
}
function apartmentPrice() {
    return(
        <div>
            <ApartmentType>home for sale</ApartmentType>
            <ApartmentPrice>$700,000</ApartmentPrice>
        </div>
    )
}
export default Card;
