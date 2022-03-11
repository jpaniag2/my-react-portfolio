import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'


export const Navigation = styled.nav`
    background-color: #181818;
    width: 100%;
    max-width: 250px;
    transition: ${({scrollNav}) => (scrollNav ? '0.6s all ease' : '0.8s all ease')};
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
export const Socials = styled.a`
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 700;
    color: #fff;
    display: inline-grid;
    align-items: center;
    text-decorations: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 2.3rem;
    line-height: 30px;

    &: hover{
            color: #01bf71;
            transition: 0.5s all ease;
    }
`