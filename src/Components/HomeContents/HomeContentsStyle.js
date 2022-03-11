import styled from "styled-components"

export const Container = styled.div`
    background-color: #fff;
    margin-left: 250px;
    padding-left: 0%;
    padding-right: 0%;
    overflow: hidden;

    @media screen and (max-width: 1124px){
        padding-left: 0;
        padding-right: 0;
        margin-left: 0%;
        margin-right: 0%;
    }
    @media screen and (max-width: 450px){
        margin-left: 0%;
        margin-right: 0%;
    }
`