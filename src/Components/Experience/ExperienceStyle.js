import styled from 'styled-components'
import {motion} from 'framer-motion'

export const InfoContainer = styled.div`
    color: #fff;
    background: #1D1D1D;

    @media screen and (max-width: 1024px){
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 800px;
    width: 100%;
    max-width: 2000px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 1024px){
        height: 100%;
 }
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: topLine;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 1024px){
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`
export const HeadingWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 0px;
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
`

export const TechnologyItem = styled.li`
    list-style: none;
    text-align: left;
    height: 60px;

`

export const Subtitle = styled.p`
    color: #fff;
    font-size: 1rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;
    padding-left: 50%;

`
export const Image = styled(motion.img)`

        position: absolute;
        width: 100%;
        height: 100%;
        max-width: 300px;
        max-height: 300px;
        z-index: 0;

        @media screen and (max-width: 1024px){
            
            width: 50%;
            height: 50%;
            max-width: 200px;
            max-height: 200px;
        }

        @media screen and (max-width: 450px){
            display: none;
        }

`