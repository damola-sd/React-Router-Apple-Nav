import React from 'react';
import Data from '../appleNavLinkData';
import { Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavWrapper = styled.div`
  max-width: 1000px;
  height: 200px;
  background-color: black;
  color: white;
  
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
            <StyledNavWrapper>
                {
                    <div>
                         this.state.navs.map(nav => (
                        <NavLink to={`/${nav.title}`}
                            activeStyle={{
                                color: "white"
                            }}>{nav.title}></NavLink>

                        <Route
                            path={`/${nav.title}`}
                            render={props => <Nav {...props} nav={nav.sublink} />}
                        />
                        ))
                    </div>
                }

            </StyledNavWrapper>




        )
    }
}