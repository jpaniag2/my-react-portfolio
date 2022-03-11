import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll/modules';
import { useNavigate } from 'react-router-dom';
// import './index.css';


import {
    Navigation,
    Navigation2,
    NavBarContainer,
    BusinessName,
    BusinessName2,
    MobileIcon,
    NavigationMap,
    NavigationLinks,
    NavigationItem,
    Logo,
    BrandContainer
} from './SideBarNavStyle'


const SideBarNav = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 50) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const navigate = useNavigate();

    return (<>

        <Navigation scrollNav={scrollNav}>
            {/* <Logo /> */}
            <NavBarContainer>
                <NavigationMap>
                

                {/* <NavigationItem>
                <BusinessName to='/' onClick={toggleHome}>JULIO</BusinessName>
                </NavigationItem> */}

                    {/* <NavigationItem>
                        <NavigationLinks to='/' onClick={toggleHome}  smooth={true} duration={500} spy={true} exact='true' offset={-60}>TOP PAGE</NavigationLinks>
                    </NavigationItem> */}
{/* 
                    <NavigationItem>
                        <NavigationLinks to="cakes" smooth={true} duration={500} spy={true} exact='true' offset={-60}>ABOUT</NavigationLinks>
                    </NavigationItem> */}

                    <NavigationItem>
                        <NavigationLinks smooth={true} to="home" duration={500} spy={true} exact='true' offset={-60}>Home</NavigationLinks>
                    </NavigationItem>

                    <NavigationItem>
                        <NavigationLinks smooth={true} to="overview" duration={500} spy={true} exact='true' offset={-60}>Overview</NavigationLinks>
                    </NavigationItem>

                    <NavigationItem>
                        <NavigationLinks to="freelance" smooth={true} duration={500} spy={true} exact='true' offset={-60}>Freelance</NavigationLinks>
                    </NavigationItem>


                    <NavigationItem>
                        <NavigationLinks to="projects" smooth={true} duration={500} spy={true} exact='true' offset={-60}>Projects</NavigationLinks>
                    </NavigationItem>

                    <NavigationItem>
                        <NavigationLinks to="/" smooth={true} duration={500} spy={true} exact='true' offset={-100}>Github</NavigationLinks>
                    </NavigationItem>

                    <NavigationItem>
                        <NavigationLinks to="/" smooth={true} duration={500} spy={true} exact='true' offset={-100}>LinkedIn</NavigationLinks>
                    </NavigationItem>

                </NavigationMap>
            </NavBarContainer>
        </Navigation>


        {/* <Navigation2>
            
            <NavigationMap>
            </NavigationMap>
            <Logo to='/' onClick={toggleHome}></Logo>
            


            <MobileIcon onClick={toggle}>
                    <GiTacos />
                </MobileIcon>

        </Navigation2> */}

            </>
    )

}

export default SideBarNav;