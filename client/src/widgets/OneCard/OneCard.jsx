import React from 'react'


export default function OneCard({ card }) {
  return (
    <>
      <div>
        <h3>{card.title}</h3>
        <p>{card.url}</p>
      </div>
    </>
  )
}
