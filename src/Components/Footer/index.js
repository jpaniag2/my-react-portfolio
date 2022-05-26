import React from 'react';
import { Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll/modules';

import {
FooterWrap,
 WebsiteRights
} from './FooterStyle';

const Footer = () => {


    return (
        <Container fluid>
            <FooterWrap>

                <WebsiteRights> Made by CrunchyVision©</WebsiteRights>
                
            </FooterWrap>
        </Container>
    )
}

export default Footer;