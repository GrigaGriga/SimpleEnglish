import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OneCard from '../widgets/OneCard/OneCard';
import axiosInstance from '../shared/libs/axiosInstance';

export default function CardsPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axiosInstance.get('/card')
      .then((res) => setCards(res.data))
      .catch((error) => console.error("Ошибка при получении карточек: ", error));
  }, []);

  return (
    <Container style={{ marginBottom: '180px', width:'100%' }}>
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold' }}>Выберите тему</h1>
        </Col>
      </Row>

      <Row className="g-4">
        {cards.map((card) => (
          <Col key={card.id} lg={4} className="d-flex justify-content-center">
            <Link to={`/cards/${card.id}`} style={{ textDecoration: 'none' }}>
              <OneCard card={card} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
