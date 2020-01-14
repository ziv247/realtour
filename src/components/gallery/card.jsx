import React from "react";
import "../../style/card.css";
import {
  ApartmentDetail,
  ApartmentHeart,
  ApartmentPrice,
  ApartmentType,
  GreenApartmentTitle
} from "./cardStyle";
import { cities } from "../../app_data/cities";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {
    const {
      id,
      user_id,
      address,
      city_id,
      price,
      number_of_room,
      number_of_bath,
      sqft,
      created_on,
      description,
      sale_status,
      availability,
      property_type,
      main_image,
      status,
      city_name
    } = this.props.apartment;
    // console.log(apartment);
    return (
      <Link
        to={`/singleApartment/${id}`}
        className={"cardWrap col-xs-12 col-sm-6 col-lg-6 col-xl-4"}
      >
        <div className={"card"}>
          <div className={"cardImageWrap"}>
            <img
              className={"card-img-top"}
              alt={"Apartment"}
              src={`http://localhost:3000/${main_image}`}
            />
            <ApartmentHeart>
              <i className="far fa-heart" />
            </ApartmentHeart>
            <GreenApartmentTitle>{description}</GreenApartmentTitle>
            <ApartmentDetail>
              <ApartmentType>{`${property_type} for ${
                sale_status != "both" ? sale_status : "Sale & Rent"
              }`}</ApartmentType>
              <ApartmentPrice>
                ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </ApartmentPrice>
            </ApartmentDetail>
          </div>
          <div className="card-body">
            <ul>
              <li>
                <span className="data-value">{number_of_room}</span> Beds
              </li>
              <li>
                <span className="data-value">{number_of_bath}</span> Bath
              </li>
              <li>
                <span className="data-value">{sqft}</span> Sqft
              </li>
            </ul>

            <div>
              {address}, {city_name}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

export default Card;
