import React, { useState } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function Stats({stat}) {
console.log(stat)
const perscent = Math.round((stat.countWords/stat.Card.Words.length)*100)
  return (
    <>
    <div>{stat.Card.title}</div>
    <>{perscent}</>
    <ProgressBar animated now={perscent} />
    </>
  );
}
