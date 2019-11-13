import styled from "styled-components";

const SearchBtn = styled.button`
        border-radius: 0 4px 4px 0;
        color: #fff;
        background-color: #d92228;
        border-color: #d92228;
        padding: 6px 12px;
        border-style: solid;
        
`;

const SearchInput = {
    boxShadow: "0 0 0 0 rgba(0,0,0,0)",
    height: "40px",
    borderRight: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
    };

const DropdownHeader = {
    background: "#f7f7f7",
    fontSize: "14px",
    padding: "10px",
    color: "#333",
    marginBottom: "16px"
};

const Dollar = {
    position: "absolute",
    zIndex: 99,
    left: "18px",
    top: "7px"
};

const dash = {
    position: "absolute",
    top: "6px",
    right: "-3px"
};

const PriceUl = styled.ul`
    margin-bottom: 10px;
    list-style:none;
    padding-left:0;
`;

const PriceLi = styled.li`
    color: #999!important;
    cursor: pointer!important;
    border: none!important;
    font-size: 16px!important;
    padding: 8px 10px!important;
    text-align : left!important;
    :hover {
        color: red!important;
        }
`;



export {SearchBtn,SearchInput,Dollar,DropdownHeader,dash,PriceUl,PriceLi};