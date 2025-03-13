import React from 'react';

export default function OneCard({ card }) {
  return (
    <>
      <div
        style={{
          backgroundColor: 'rgb(255, 201, 201)',
          borderRadius: '15px',
          overflow: 'hidden',
          width: '380px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
        className="card"
      >
        <img
          src={card.url}
          className="card-img"
          alt="Картинка темы"
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '15px',
            border: '3px solid black',
          }}
        />
        <div
          style={{
            color: 'black',
            textAlign: 'center',
            padding: '10px',
            flexShrink: 0,
          }}
        >
          <h5 style={{ marginBottom: '0px', fontSize: '30px' }} className="card-title">
            {card.title}
          </h5>
        </div>
      </div>
    </>
  );
}
