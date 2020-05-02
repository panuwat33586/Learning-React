import React from 'react';
import { Card } from '../basic/Card';
import { Row, Col } from '../basic/Container'

const CategorySection=({id,category})=>{
    return(
        <Row>
            {category.map(({name})=>(
                 <Col
                 span={8}
                 >
                   <Card
                    title={name}
                    key={id}
                     Img='https://i.ytimg.com/vi/Sd1QBwBHIJk/maxresdefault.jpg'
                   >
                     <p>detail</p>
                   </Card>
                 </Col>
            ))}
       
      </Row>
    )
}

export default CategorySection

