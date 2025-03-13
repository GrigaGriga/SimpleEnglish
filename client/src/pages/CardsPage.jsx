import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import OneCard from '../widgets/OneCard/OneCard';
import axiosInstance from '../shared/libs/axiosInstance';

export default function CardsPage() {
  const [cards, setCards] = useState([]);
  console.log('cards', cards)
  useEffect(() => {
    axiosInstance.get('/card')
      .then((res) => setCards(res.data))
      .catch((error) => console.error("Ошибка при получении карточек: ", error));
  }, []);
  return (
    <Container style={{ marginTop: '100px' }}>
      <Row>
        {cards.map((card) => (
          <Col key={card.id} style={{ marginBottom: '20px' }}>
            <OneCard card={card} />
          </Col>
        ))}
      </Row>
    </Container>
  )
}
