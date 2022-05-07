import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AccountModal = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Abra sua conta</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicNome">
          <Form.Label>Seu nome</Form.Label>
          <Form.Control type="text" placeholder="Seu nome" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Seu Email</Form.Label>
          <Form.Control type="email" placeholder="Seu Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCity">
          <Form.Label>Sua cidade</Form.Label>
          <Form.Control as="select">
            <option value="1">Florianópolis - SC</option>
            <option value="2">Curitiba - PR</option>
            <option value="3">São Paulo - SP</option>
            <option value="4">Rio de Janeiro - RJ</option>
          </Form.Control>
        </Form.Group>

        <Form.Check
          type="checkbox"
          id="custom-switch"
          label="Eu li e concordo com os termos de uso."
        />
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button>
      <Button variant="primary" onClick={handleClose}>
        Criar conta
      </Button>
    </Modal.Footer>
  </Modal>
);

export default AccountModal;
