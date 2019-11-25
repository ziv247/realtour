import styled from "styled-components";

const NavUl = styled.ul`
    display: flex;
    list-style: none;
    justify-content: space-around;
        padding: 0 45px;
        margin:0 auto;
        width: 75%;
`;

const NavLi = styled.li`
    font-size: 14px;
text-transform: uppercase;
color: #fff;
text-shadow: 1px 1px 1px rgba(0,0,0,0.25);
font-weight: 700;
padding: 6px;
border-bottom: 3px solid transparent;
:hover{
    border-color: red;
    cursor:pointer;
}
`;




const MainP = styled.p`
      font-size: 1.25em;
    max-width: 70%;
    margin: 0.5em auto 1.5em;
`;

const MainDiv = styled.div`
     text-align: center;
    position: absolute;
    color: #fff;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.25);
    width: 90%;
    height: fit-content;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
`;

export {NavUl,MainP,MainDiv,NavLi};