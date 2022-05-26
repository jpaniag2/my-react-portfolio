import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const FooterContainer = styled.footer`
    ${'' /* background-color: #101522; */}
  
`

export const FooterWrap = styled.div`
    padding: 100px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1024px){
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 1024px){
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #4B4B4B;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 100%;
    }
    `
    export const FooterLinkTitle = styled.h1`
        font-size: 14px;
        margin-bottom: 16px;
    `

    export const FooterLink = styled(Link)`
        color: #4B4B4B;
        text-decoration: none;
        margin-bottom: 0.5rem;
        font-size: 14px;

        &: hover{
            color: #01bf71;
            transition: 0.3 ease-out;
        }
    `
    export const SocialMedia = styled.section`
        max-width: 1000px;
        width: 100%;
    `

    export const SocialMediaWrap = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1100px;
        margin: 40px auto 0 auto;

        @media screen and (max-width: 1024px){
            flex-direction: column;
        }
    `

    export const SocialLogo = styled(Link)`
        color: #4B4B4B;
        font-family: 'Bellota Text', cursive;
        font-weight: Regular 400;
        justify-self: start;
        cursor: pointer;
        text-decoration: none;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        margin-bottom: 16px;

    `

    export const SocialLogo2 = styled(Link)`
    color: #4B4B4B;
    font-family: 'Great Vibes', cursive;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;

`

    export const WebsiteRights = styled.small`
        color: #4B4B4B;
        font-family: 'Bellota Text', cursive;
        font-weight: 500;
        margin-bottom: 16px;
    `

    export const SocialIcons = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 70px;
    `
    export const SocialIconLink = styled.a`
        color: #4B4B4B;
        font-size: 24px;
    `