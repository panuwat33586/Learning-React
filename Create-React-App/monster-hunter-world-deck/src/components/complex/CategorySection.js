import React from 'react';
import { Card } from '../basic/Card';
import { Topic } from '../basic/Text'
import { Row, Col } from '../basic/Container'
import { StarRating } from '../basic/Rating'

const CategorySection = ({ category }) => {
    return (
        <Card backgroundImg={process.env.PUBLIC_URL + '/images/Section-Background.jpg'}>
            <Row>
                {category.map(({ name, description, image, species, weakness, alignment: { blights }, locations }) => (
                    <Col
                        span={8}
                        key={name}
                    >
                        <Card
                            title={name}
                            Img={image}
                            backgroundColor={'#cccccc'}
                        >
                            <Row>
                                <Col span={8}>
                                    <Topic>
                                        species
                                </Topic>
                                    <p>{species}</p>
                                </Col>
                                <Col span={8}>
                                    <Topic>
                                        Weakness
                                </Topic>
                                    {weakness.map(({ element, level }) =>
                                        (
                                            <Row
                                                key={name + element}
                                            >
                                                <Col><StarRating title={element} rating={level} />   </Col>
                                            </Row>
                                        )
                                    )}
                                </Col>
                                <Col span={8}>
                                    <Topic>
                                        alignment
                            </Topic>
                                    {blights.map(blight => <p key={name + blight}>{blight}</p>)}
                                </Col>
                            </Row>
                            <Topic>
                                Description
                        </Topic>
                            <p>{description}</p>
                            <Topic>
                                Found Location
                        </Topic>
                            <p>{locations.toString()}</p>
                        </Card>
                    </Col>
                ))}

            </Row>
        </Card>
    )
}

export default CategorySection

