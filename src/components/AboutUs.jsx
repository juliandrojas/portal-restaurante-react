import React from 'react'
import { Card, CardBody, CardSubtitle, CardTitle, Col, Row } from 'reactstrap'

export default function AboutUs() {
  return (
    <div className='container'>
        <br />
        <h1 className='text-center'>Acerca de nosotros</h1>
        <h2 className='text-center'>Objetivos de nuestra empresa</h2>
        <br />
        <Row>
            <Col sm="4">
                <Card>
                    <CardBody>
                        <CardTitle className="text-center font-weight-bold">
                            Misión
                        </CardTitle>
                        <CardSubtitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio omnis earum doloremque, iusto et natus iste rem incidunt fugit velit ex quos molestias exercitationem nulla voluptas porro animi similique voluptatum!</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="4">
                <Card>
                    <CardBody>
                        <CardTitle className="text-center font-weight-bold">
                            Visión
                        </CardTitle>
                        <CardSubtitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio omnis earum doloremque, iusto et natus iste rem incidunt fugit velit ex quos molestias exercitationem nulla voluptas porro animi similique voluptatum!</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="4">
                <Card>
                    <CardBody>
                        <CardTitle className="text- font-weight-bold">
                            Política Institucional
                        </CardTitle>
                        <CardSubtitle>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio omnis earum doloremque, iusto et natus iste rem incidunt fugit velit ex quos molestias exercitationem nulla voluptas porro animi similique voluptatum!</CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
  )
}
