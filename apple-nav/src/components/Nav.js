import React from 'react';


const StyledNav = styled.div`
    height: 300px;
    background-color: gray;
    color: black;
    display:flex;
    justify-content:space-between;
    
`;
export default function Nav(props) {
    return (
        <StyledNav>
            {
                this.props.nav.map(link => (
                    <div
                        key={link.id}>
                        <img src={link.imageUrl} alt={link.title} />
                        <span>{link.title}</span>
                    </div>

                ))
            }
        </StyledNav>
    );
}