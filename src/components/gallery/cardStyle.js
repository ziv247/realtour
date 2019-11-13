import styled from "styled-components";

const GreenApartmentTitle = styled.div`
    display: inline-block;
    font-size: 11px;
    padding: 4px 4px 3px;
    text-transform: uppercase;
    background-color: #3D850A;
    border-color: #3D850A;
    position: absolute;
    top:15px;
    left: 15px;
    z-index: 999;
    line-height: 1;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
`;

const ApartmentType = styled.div`
    font-size: 11px;
    color: #fff;
    margin-bottom: 4px;
    text-shadow: 0 0 2px #444;

    `;

const ApartmentPrice = styled.div`
    line-height: 1;
    font-weight: 700;
    color: #fff;
    text-shadow: 0 1px #444;
    display: inline-block;
    font-size: 22px;
    
`;

const ApartmentDetail = styled.div`
    bottom:15px;
    left: 15px;
    z-index: 999;
    position:absolute;
`;

const ApartmentHeart = styled.div`
    right: 15px;
    z-index: 999;
    position:absolute;
    color: #fff;
    font-size: 2em;
`;

export {GreenApartmentTitle,ApartmentType,ApartmentPrice,ApartmentDetail,ApartmentHeart};