import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FlippingCard.module.css";
import axiosInstance from "../../shared/libs/axiosInstance";

export default function OneUserWord({ word, setWords }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  console.log(word)
  const deleteWord = async (event, word) => {
    event.stopPropagation();
    const id = word.id
    try {
      const res = await axiosInstance.delete(`/user/word/${id}`);
      if (res.status === 204) {
        console.log(11111, res);
        setWords((prev) => prev.filter((el) => el.id !== word.id))
      }
    } catch (error) {
      console.log(error);
      alert("Что-то пошло не так");
    }
  };

  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      <AnimatePresence initial={false}>
        {isFlipped ? (
          <motion.div
            key="back"
            className={styles.card}
            style={{ backgroundColor: "rgb(254, 236, 152)" }}
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -180, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.cardContent}>
              <div style={{ marginBottom: "15px" }}>{word.rus}</div>
              <button
                style={{ backgroundColor: "rgb(255, 201, 201)" }}
                type="button"
                className="btn"
                onClick={(event) => {
                  deleteWord(event, word);
                }}
              >
                Удалить
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="front"
            className={styles.card}
            style={{ backgroundColor: "rgb(255, 201, 201)" }}
            initial={{ rotateY: -180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 180, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.cardContent}>{word.eng}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
