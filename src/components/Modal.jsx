import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

export default function ModalComponent({ isOpen, toggle, title, content }) {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal Header</ModalHeader>
        <ModalBody>Modal Body</ModalBody>
        <ModalFooter>
            <Button color='secondary' onClick={toggle}>Cerrar</Button>
        </ModalFooter>
    </Modal>
  )
}
