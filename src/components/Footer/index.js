import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
  FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap,
  SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>              
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Carrers</FooterLink>
                <FooterLink to="/signin">Tems of service</FooterLink>            
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact us</FooterLinkTitle>              
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Carrers</FooterLink>
                <FooterLink to="/signin">Tems of service</FooterLink>            
            </FooterLinkItems>            
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>              
                <FooterLink to="/signin">How it works</FooterLink>
                <FooterLink to="/signin">Testimonials</FooterLink>
                <FooterLink to="/signin">Carrers</FooterLink>
                <FooterLink to="/signin">Tems of service</FooterLink>            
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>              
                <FooterLink to="/signin">Instagram</FooterLink>
                <FooterLink to="/signin">Facebook</FooterLink>
                <FooterLink to="/signin">Youtube</FooterLink>
                <FooterLink to="/signin">Twitter</FooterLink>            
            </FooterLinkItems>            
          </FooterLinksWrapper>          
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>
              dolla
            </SocialLogo>
            <WebsiteRights>dolla {new Date().getFullYear()} All rights reserved</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" taget="_black" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" taget="_black" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" taget="_black" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" taget="_black" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" taget="_black" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>                                                        
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
