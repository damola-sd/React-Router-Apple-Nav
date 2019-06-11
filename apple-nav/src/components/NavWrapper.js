import React from 'react';
import Data from '../appleNavLinkData';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './Nav';

const StyledNavWrapper = styled.div`
  max-width: 1000px;
  height: 200px;
  background-color: black;
  color: white;
  
`;

const StyledNav = styled.div`
    height: 300px;
    background-color: gray;
    color: black;
    display:flex;
    justify-content:space-between;
    
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
                {
                    this.state.navs.map(nav => (
                        <NavLink 
                            key = {nav.id}
                            to={`/${nav.title}`}
                             activeStyle={{
                            color: "white"
                            }}>{nav.title}></NavLink>
                     ))
                }
            
            </StyledNavWrapper>
            
            <StyledNav>
                {
                    this.state.navs.map(link => (
                        <Route
                          key = {link.id}
                          path = {`/${link.title}`}
                          render = {props => <Nav {...props} nav = {link.subLink}/>}
                        />
                    ))
                }
            </StyledNav>
             
          </>       
        );
    }
}