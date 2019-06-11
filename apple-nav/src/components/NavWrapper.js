import React from 'react';
import Data from '../appleNavLinkData';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const StyledNavWrapper = styled.div`
  max-width: 1000px;
  height: 40px;
  margin: 0 auto;  
  background-color: black;
  color: white;

  a{
      margin-left: 20px;
  }
  
`;

const StyledNavLink = styled(NavLink)`
margin-right: 10px;
flex-direction: flex-start;
text-decoration: none;
color: white;
padding: 30px;

`;

const StyledNav = styled.div`
    height: 50px;
    background-color: lightgray;
    color: black;
    display: flex;
    justify-content: space-between;
    
`;




export class NavWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navs: Data
        }
    }
    render() {
        return (
            <>
                <StyledNavWrapper>
                    <a href="/">
                        <img
                            src="https://www.apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"
                            alt="Apple"
                        />
                    </a>
                    {
                        this.state.navs.map(nav => (
                            <StyledNavLink
                                key={nav.id}
                                to={`/${nav.title}`}
                                activeStyle={{
                                    color: "white"

                                }}>{nav.title}</StyledNavLink>
                        ))
                    }

                </StyledNavWrapper>

                <StyledNav>
                    {
                        this.state.navs.map(link => (
                            <Route
                                key={link.id}
                                path={`/${link.title}`}
                                render={props => <Nav {...props} nav={link.subLink} />}
                            />
                        ))
                    }
                </StyledNav>

            </>
        );
    }
}