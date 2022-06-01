import React from 'react';
import { Container } from 'react-bootstrap';
import Logo from '../../images/jpLogo.png'
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';

import {
FooterWrap,
 WebsiteRights
} from './FooterStyle';

const Footer = () => {


    return (
        <Container fluid style={{ backgroundColor: '#212429' }}>
            <FooterWrap>
            <img
                            src={Logo}
                            width="100"
                            height="100"
                            className="d-inline-block"
                            alt="logo"
                            style={{margin: '2rem 0'}}

                        />
                <WebsiteRights> Made by Julio Paniagua aka Crunchy Visions©</WebsiteRights>
                
            </FooterWrap>
        </Container>
    )
}

export default Footer;