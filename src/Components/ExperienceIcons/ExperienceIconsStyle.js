import styled from "styled-components";
import {motion} from 'framer-motion'

export const Image = styled(motion.img)`

        position: flex;
        width: 100%;
        height: 100%;
        max-width: 300px;
        max-height: 300px;
        margin-right: -3%;
        z-index: 0;

        @media screen and (max-width: 1500px){
            width: 100%;
            height: 100%;
            max-width: 200px;
            max-height: 200px;
        }

        @media screen and (max-width: 1200px){
            width: 100%;
            height: 100%;
            max-width: 150px;
            max-height: 150px;
            margin-left: -3%;
        }

        @media screen and (max-width: 900px){
            margin-top: -700px;
            margin-left: 3%;
            width: 100%;
            height: 100%;
            max-width: 100px;
            max-height: 100px;
            z-index: 0;
        }

        @media screen and (max-width: 450px){
            display: none;
        }

`

export const Introduction = styled.p`
    margin-bottom: 24px;
    text-align: center;
    font-size: 4rem;
    font-family: 'Bellota Text', cursive;
    line-height: 1.1;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#111' : '#fff')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const TopLine = styled.p`
    color: #ce202a;
    font-size: 1rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;
    text-align: center;

    @media screen and (max-width: 480px){
        display: none;
    }
`