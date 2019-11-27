import React from 'react';
import '../../style/card.css';
import {ApartmentDetail, ApartmentHeart, ApartmentPrice, ApartmentType, GreenApartmentTitle} from "./cardStyle";
import {cities} from "../../app_data/cities";
import {Link} from "react-router-dom";


class Card extends React.Component {
    render() {
        const {item} = this.props;

        return (

                <Link to={`/singleApartment/${item.id}`} className={"cardWrap col-xs-12 col-sm-6 col-lg-6 col-xl-4"}>
                    <div className={"card"}>
                        <div className={"cardImageWrap"}>
                            <img className={"card-img-top"} alt={'Apartment'}
                                 src={`../images/apartment/${item.main_image}`}/>
                            <ApartmentHeart><i className="far fa-heart"/></ApartmentHeart>
                            <GreenApartmentTitle>new</GreenApartmentTitle>
                            <ApartmentDetail>
                                <ApartmentType>home for sale</ApartmentType>
                                <ApartmentPrice>${(item.price * 1000000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</ApartmentPrice>
                            </ApartmentDetail>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li><span className="data-value">{item.number_of_beds}</span> Beds</li>
                                <li><span className="data-value">{item.number_of_rooms}</span> Rooms</li>
                                <li><span className="data-value">7500</span> Sqft</li>
                            </ul>

                            <div>{item.address}, {cities[item.cityId - 1]["label"]}</div>


                        </div>
                    </div>
                </Link>

        )
    }
}

export default Card;

