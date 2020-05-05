import React from 'react'
import styled from 'styled-components';


const CardContainer = styled.div`
display:flex;
flex-direction:column;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
border-radius: 5px;
margin:10px;
background-image:${({backgroundImg})=>`url(${backgroundImg})`};
background-size:cover;
background-color:${({backgroundColor})=>backgroundColor}
`;
const CardTitle=styled.div`
  font-family:'Kanit', sans-serif;
  font-size:20px;
  margin:5px;
  text-align:center;
`;
const CardBody = styled.div`
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


export const Card = ({ Img,title,backgroundImg,backgroundColor, children }) => (
    <CardContainer backgroundImg={backgroundImg} backgroundColor={backgroundColor}>
        <CardTitle>
           {title}
        </CardTitle>
        <ImageContainer>
            <Image src={Img}  />
        </ImageContainer>
        <CardBody>
            {children}
        </CardBody>
    </CardContainer>
)




