import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;

    ${'' /* background: ${({lightBg}) => (lightBg ? '#F3EDE1' : '#F3EDE1')};  */}
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
    padding-top: 0;
    padding-bottom: 60px;
`

export const Introduction = styled.p`
    margin-bottom: 24px;
    font-size: 4rem;
    font-family: 'Pacifico', cursive;
    line-height: 1.1;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#111' : '#fff')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const TopLine = styled.p`
    color: green;
    font-size: 1rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 6rem;
    font-family: 'Bellota Text', cursive;
    line-height: 1.1;
    font-weight: 700;
    color: ${({lightText}) => (lightText ? '#111' : '#fff')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    ${'' /* max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#fff' : '#fff')}; */}

    color: green;
    font-size: 2rem;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    line-height: 30px;

`


export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
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