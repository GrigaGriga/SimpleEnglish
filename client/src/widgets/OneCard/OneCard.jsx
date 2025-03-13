import React from 'react';

export default function OneCard({ card }) {
  return (
    <>
      <div
        style={{
          backgroundColor: 'rgb(255, 201, 201)',
          borderRadius: '15px',
          overflow: 'hidden',
          // width:'px',
          // height:'px',
        }}
        className="card"
      >
        <img
          src={card.url}
          className="card-img"
          alt="..."
          style={{ width: '307px', height: '150px' }}
        />
        <div className="card-img-overlay">
          <h5 className="card-title">{card.title}</h5>
        </div>
      </div>
    </>
  );
}
