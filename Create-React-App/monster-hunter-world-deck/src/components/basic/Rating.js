import React from 'react';
import styled from 'styled-components';


function repeat(rating){
   return  [...Array(rating)].map((e,i)=><span className="fa fa-star checked" key={i}/>)
}

const Ratingcontainer=styled.div`
   display:inline-block;
`


export const StarRating=({title,rating})=>(
     <Ratingcontainer>
        <p>{title}: {repeat(rating)}</p>
     </Ratingcontainer>
)