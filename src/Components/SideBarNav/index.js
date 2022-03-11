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

                    <NavigationItem>
                        <Socials><a href="https://github.com/jpaniag2"><FaGithub color='#fff'/></a></Socials>
                    </NavigationItem>

                    <NavigationItem>
                        <Socials><a href="https://www.linkedin.com/in/juliopaniaguaalanis/"><FaLinkedin color='#fff'/></a></Socials>
                    </NavigationItem>

                </NavigationMap>
            </NavBarContainer>
        </Navigation>

            </>
    )

}

export default SideBarNav;