import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`
max-height: 50%;
max-width: 70%;
`;

const StyledSpan = styled.span`
font-size: 15px;
`;
export default function Nav(props) {
    return (
        <>
             {
                props.nav.map(link => (
                    <div
                        key={link.id}>
                        <StyledImage src={link.imageUrl} alt={link.title} />
                        <br></br>
                        <StyledSpan>{link.title}</StyledSpan>
                    </div>

                ))
            }
        </>
    );
}