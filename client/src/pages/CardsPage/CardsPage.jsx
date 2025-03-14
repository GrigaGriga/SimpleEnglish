import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OneCard from '../../widgets/OneCard/OneCard';
import axiosInstance from '../../shared/libs/axiosInstance';
import './CardsPage.css'; // Для подключения стилей

export default function CardsPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axiosInstance.get('/card')
      .then((res) => setCards(res.data))
      .catch((error) => console.error("Ошибка при получении карточек: ", error));
  }, []);

  return (
    <Container style={{ paddingTop: '10vh', marginBottom: '100px', width: '100%' }}>
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold' }}>Выберите тему</h1>
        </Col>
      </Row>

      <Row className="g-4">
        {cards.map((card) => (
          <Col
            key={card.id}
            lg={4}  // На экранах шириной 1400px и больше карточки будут занимать 4 колонки
            md={6}  // На экранах от 768px до 1400px карточки будут занимать 6 колонок
            sm={12} // На экранах меньше 768px карточки будут занимать всю ширину экрана
            className="d-flex justify-content-center"
          >
            <Link to={`/cards/${card.id}`} style={{ textDecoration: 'none' }}>
              <OneCard card={card} />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
