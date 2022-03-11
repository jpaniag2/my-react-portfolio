import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import logo from '../../images/profile_image.png'
// import logo from '../../images/LogoDemo.png'
// import logo from '../../images/AztecaLogo14.png'


export const Navigation = styled.nav`
    ${'' /* background-color: #222021; */}
    background-color: #181818;
    width: 100%;
    max-width: 250px;
    ${'' /* height: 60px; */}
    transition: ${({scrollNav}) => (scrollNav ? '0.6s all ease' : '0.8s all ease')};
    ${'' /* transition: 0.8s all ease; */}
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    padding: 0px;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 10;

@media screen and (max-width: 1024px){
    transition: 0.8s all ease;
    display: none;

}

@media screen and (max-width: 450px){
    display: flex;
}

`

export const NavBarContainer = styled.div`
    display: flex;
    
    z-index: 1;
    
    padding-bottom: 30px;
`
export const BrandContainer = styled.div`
    display: flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-image: ${`url(${logo})`};
    background-size: cover;
    align-items: center;
    height: 200px;
    width: 100%;
    margin-top: 15px;
    border-radius: 50%;
`

export const Logo = styled.div`
    background-image: ${`url(${logo})`};
    background-size: cover;
    margin-top: 0px;
    background-repeat: no-repeat;
    background-color: transparent;
    height: 200px;
    width: 100%;
    border-radius: 50%;
    transition: 0.8s all ease;


@media screen and (max-width: 1024px){
    padding: 0px 12px;
    background-color: transparent;
    border: none;
}

@media screen and (max-width: 450px){
    margin-top: -10px;
    margin-right: 40px;
    padding: 0px 12px;
    background-position: bottom ;
    background-color: transparent;
    border: none;
    height: 80px;
    width: 90px;
}

`

export const BusinessName = styled(LinkScroll)`
    font-size: 5rem;
    margin-top: 10px;
    margin-left: 0.5rem;
    margin-bottom: 12px;
    color: #fff;
    justify-self: flex-start;

    align-items: center;
    align-left: 24px;
    text-decoration: none;
    cursor: pointer;

    font-family: 'Bellota Text', cursive;
    font-weight: 700;
    line-height: 0px;


    @media screen and (max-width: 1024px){
        border: none;
        font-size: 2rem;
        margin-top: 10px;
        margin-left: 2rem;
        margin-bottom: 22px;
        padding: 0px;
    }

    @media screen and (max-width: 450px){
        font-size: 2rem;
    }

`

export const BusinessName2 = styled.div`
    margin-top: 50px;
    margin-left: 10px;
    color: #fff;
    justify-self: flex-start;
    font-size: 2rem;
    display: flex;
    align-items: center;
    align-left: 18px;
    font-weight: bold;
    text-decoration: none;
    left: 0;

    @media screen and (max-width: 1024px){
        border: none;
        margin-right: 35px;
        padding-right: 50px;
        font-size: 2rem;
    }

    @media screen and (max-width: 450px){
        font-size: 1.5rem;
    }

`


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1024px){
        color: #fff;
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`


export const NavigationMap = styled.ul`
    display: grid;
    align-items: center;
    list-style: none;
    text-align: center;

`


export const NavigationItem = styled.li`
    height: 80px;

`

export const NavigationLinks = styled(LinkScroll)`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
    color: #fff;
    display: inline-grid;
    align-items: center;
    text-decorations: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 2.3rem;
    ${'' /* margin-top: ${({scrollNav}) => (scrollNav ? '1rem' : '2.6rem')}; */}
    ${'' /* margin-top: 3rem; */}

    @media screen and (max-width: 1024px){
        font-size: 12px;
    }
    @media screen and (max-width: 450px){
        display: none;
    }

    &.active{
        border-bottom: 3px solid green;
    }

    &: hover{
            color: #01bf71;
            transition: 0.5s all ease;
        }

`


export const NavigationButton = styled.nav`
    display: flex;
    align-items: center;
    padding: 5px 15px;

    @media screen and (max-width: 1024px){
        display: none;
    }
`


export const NavigationButtonLink = styled(LinkR)`
    border-radius: 50px;
    background: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &: hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`