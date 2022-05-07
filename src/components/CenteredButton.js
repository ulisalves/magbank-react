import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const CenteredButton = ({ children, onClick }) => (
  <Container>
    <Row>
      <Col className="d-flex justify-content-center">
        <Button
          className="my-5 px-5 py-3"
          variant="success"
          size="lg"
          onClick={onClick}
        >
          {children}
        </Button>
      </Col>
    </Row>
  </Container>
);

export default CenteredButton;
