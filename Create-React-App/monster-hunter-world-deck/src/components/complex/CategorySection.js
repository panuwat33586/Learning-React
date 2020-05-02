import React from 'react';
import { Card } from '../basic/Card';
import {Topic} from '../basic/Text'
import { Row, Col } from '../basic/Container'

const CategorySection = ({ category }) => {
    return (
        <Row>
            {category.map(({ name, description, image }) => (
                <Col
                    span={8}
                    key={name}
                >
                    <Card
                        title={name}
                        Img={image}
                    >
                        <Topic>
                            Description
                        </Topic>
                        <p>{description}</p>
                    </Card>
                </Col>
            ))}

        </Row>
    )
}

export default CategorySection

