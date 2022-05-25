import styled from 'styled-components'

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
    align-items: center;
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
    padding-top: 60px;
    padding-left: 5%;
    position: absolute; 
    
`

export const Introduction = styled.p`
    margin-bottom: 24px;
    font-size: 4rem;
    font-family: 'Pacifico', cursive;
    line-height: 1.1;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#111' : '#ce202a')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const TopLine = styled.p`
    color: #000;
    font-size: 1.5rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;

    @media screen and (max-width: 1024px){
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px){
        color: #ce202a;
        font-size: .9rem;
    }
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 6rem;
    font-family: 'Bellota Text', cursive;
    line-height: 1.1;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#111' : '#000')};

    @media screen and (max-width: 1024px){
        font-size: 4rem;
    }
    @media screen and (max-width: 480px){
        margin-bottom: 0px;
        font-size: 2rem;
    }
`

export const Subtitle = styled.p`
    color: #ce202a;
    font-size: 2rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;
    @media screen and (max-width: 1024px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 480px){
        font-size: .9rem;
    }
`

export const ImgWrap = styled.div`
    max-width: 70%;
    height: 100%;

    @media screen and (max-width: 1024px){
        height: 800px;
    }

`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    display: cover;
    border-radius: 50%;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 1024px){
        height: 450px;
        padding-top: 40px;
        border-radius: 0;
        object-fit: contain;
    }
    @media screen and (max-width: 450px){
        padding-top: 0px;
        object-fit: contain;
        border-radius: 0;
        padding-top: 10px;
        
    }
`