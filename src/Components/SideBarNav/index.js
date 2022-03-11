import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


import {
    Navigation,
    NavBarContainer,
    NavigationMap,
    NavigationLinks,
    NavigationItem,
    Socials

} from './SideBarNavStyle'


const SideBarNav = () => {

    const [scrollNav] = useState(false);

    return (<>

        <Navigation scrollNav={scrollNav}>
            <NavBarContainer>
                <NavigationMap>
                

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
                        <br></br>
                    <NavigationItem>
                        <a href="https://github.com/jpaniag2" target="_blank"><FaGithub size='2rem' color='#fff'/></a>
                    </NavigationItem>

                    <NavigationItem>
                        <a href="https://www.linkedin.com/in/juliopaniaguaalanis/" target="_blank"><FaLinkedin size='2rem' color='#fff'/></a>
                    </NavigationItem>

                </NavigationMap>
            </NavBarContainer>
        </Navigation>

            </>
    )

}

export default SideBarNav;