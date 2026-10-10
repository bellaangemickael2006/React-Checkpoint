import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const cards = [
  { title: 'Carte 1', text: 'Premier contact avec React et les composants.' },
  { title: 'Carte 2', text: "React-Bootstrap fournit des composants Bootstrap prêts à l'emploi." },
  { title: 'Carte 3', text: 'Les fragments permettent de grouper des éléments sans div en plus.' },
];

function App() {
  return (
    <Fragment>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">React Checkpoint</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Accueil</Nav.Link>
              <Nav.Link href="#features">Fonctionnalités</Nav.Link>
              <Nav.Link href="#about">À propos</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Container className="my-4 text-center">
          <h1 className="display-4">Bienvenue sur mon application React</h1>
          <p className="lead">Construite avec React et React-Bootstrap.</p>
        </Container>

        <Container>
          <Row className="g-4">
            {cards.map(card => (
              <Col md={4} key={card.title}>
                <Card className="h-100">
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                    <Button variant="primary">En savoir plus</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </Fragment>
  );
}

export default App;
