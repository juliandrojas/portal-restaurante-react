import React from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'

export default function Presentation() {
  return (
    <>
        <div className='text-center'>
            <Card>
                {/* <CardImg top src='../img/logo.png'></CardImg> */}
                <CardBody>
                    <CardTitle>
                        <h1 className='strong'>Portal Restaurante</h1>
                        <h3 className='font-weight normal font-italic'>Nuestro lema es servir con agrado al público</h3>
                    </CardTitle>
                    <CardImg src='logo.png' alt='Logo Empresa' />
                </CardBody>
            </Card>
            
        </div>
    </>
  )
}
