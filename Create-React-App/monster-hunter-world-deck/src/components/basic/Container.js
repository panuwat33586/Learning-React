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
   display:flex;
   flex:${({span})=>columnCal(span) }
`;

export const Col =({span,children})=>(
     <Column
     span={span}
     >
     {children}
     </Column>
)