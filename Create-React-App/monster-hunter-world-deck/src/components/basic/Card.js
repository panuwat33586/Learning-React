import React from 'react'
import styled from 'styled-components';


const CardContainer = styled.div`
display:flex;
flex-direction:column;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;
margin:10px;
`;
const CardBody = styled.div`
display:flex;
padding: 2px 16px;
`;

const ImageContainer = styled.div`
  width:100%;
  height: 100%;
`;
const Image = styled.img`
  width:100%;
  height: 100%;
  object-fit: cover;
`


export const Card = ({ Img, children }) => (
    <CardContainer>
        <ImageContainer>
            <Image src={Img}  />
        </ImageContainer>
        <CardBody>
            {children}
        </CardBody>
    </CardContainer>
)




