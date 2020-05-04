import React from 'react';
import styled from 'styled-components';


export const Row=styled.div`
   display:flex; 
   flex-wrap:wrap;
`;

function columnCal(span){
    return `0 1 calc(${(span/24)*100}% - 1em)`
}
const Column=styled.div`
   margin:5px;
   display:flex;
   flex-direction:column;
   flex:${({span})=>columnCal(span) };
`;

export const Col =({span,children})=>(
     <Column
     span={span}
     >
     {children}
     </Column>
)

const LogoContainer=styled.div`
     display:flex;
     justify-content:center;
`

export const Logo=({children})=>(
   <LogoContainer>
            {children}
   </LogoContainer>
)