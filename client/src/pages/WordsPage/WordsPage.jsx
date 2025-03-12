import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosInstance, { setAccessToken } from "../../shared/libs/axiosInstance";
import OneWord from "../../widgets/OneWord/OneWord";


const WordsPage = () => {
  const [words, setWords] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    axiosInstance.get(`/cards/${id}`).then((res) => setWords(res.data));
  }, []);
  return (
    <>
      {words.map((el) => (
        <OneWord  key={el.id} word={el}></OneWord>
      ))}
    </>
  );
};

export default WordsPage;
