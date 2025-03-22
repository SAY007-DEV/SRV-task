import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;

`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: #00bcd4; /* teal color for 'asap' */
  position: relative;
  margin-right: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 100%; 
    top: 50%; 
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-left: 15px solid #00bcd4;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
  }
`;

const AdditionalText = styled.span`
  font-size: 12px;
  font-weight:bold;
  text-align:right;

  color: orange;
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 30px;
  margin-top: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const UserGreeting = styled.div`
  display: flex;
  align-items: center;
`;

const UserInitial = styled.div`
  width: 40px;
  height: 40px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const GreetingText = styled.span`
  margin-left: 10px;
  font-size: 16px;
  color: gray;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <LogoSection>
        {/* <Logo>asap</Logo> */}
        <AdditionalText>ADDITIONAL <br /> SKILL ACQUISITION <br />PROGRAMME</AdditionalText>
      </LogoSection><NavLinks>
        <Link href="#">Jobs</Link>
        <Link href="#">Internship</Link>
        <Link href="#">Job Fair</Link>
        <Link href="#">Companies</Link>
        <Link href="#">Support</Link>
      </NavLinks>
      <UserGreeting>
        <UserInitial>A</UserInitial>
        <GreetingText>Hi, Abhishek S...</GreetingText>
      </UserGreeting>
    </HeaderContainer>
    
  );
};

export default Header;