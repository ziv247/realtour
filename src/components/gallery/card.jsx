import React from 'react';
import '../../style/card.css';

class Card extends React.Component{
    render() {
        const {item} = this.props;
        return(
            <div className={"cardWrap col-xs-12 col-sm-6 col-lg-6 col-xl-4"}>
                <div className={"card"}>
                    <div className={"cardImageWrap"} >
                        <img className={"card-img-top"} src={`./${item.main_image}`}/>
                    </div>
                    <div className="card-body">
                        <ul>
                            <li><span className="data-value">3</span> Beds</li>
                            <li><span className="data-value">4</span> Rooms</li>
                            <li><span className="data-value">7500</span> Sqft</li>
                        </ul>
                        <div>330 3rd Ave, undefined</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;
