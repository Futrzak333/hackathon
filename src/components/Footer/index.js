import React from 'react' 
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems,FooterLinkTitle,FooterLink} from './FooterElements';


const Footer = () => {
    return(
        <FooterContainer>
<FooterWrap>
    <FooterLinksContainer>
        <FooterLinksWrapper>
            <FooterLinkItems>
                <FooterLinkTitle>About us</FooterLinkTitle> 
                    <FooterLink to="/signin">Contact</FooterLink> 
                    <FooterLink to="/signin">Job Offer</FooterLink> 
                    <FooterLink to="/signin">Employees</FooterLink> 
                    <FooterLink to="/signin">Investors</FooterLink> 
                    <FooterLink to="/signin">Socials</FooterLink>  
            </FooterLinkItems>
        </FooterLinksWrapper>
    </FooterLinksContainer>
</FooterWrap>

        </FooterContainer>
    )
};
export default Footer;