import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./FlippingCard.module.css";

export default function OneWord({ word }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={styles.cardContainer} onClick={handleClick}>
      <AnimatePresence initial={false}>
        {isFlipped ? (
          <motion.div
            key="back"
            className={styles.card}
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -180, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.cardContent}>{word.rus}</div>
          </motion.div>
        ) : (
          <motion.div
            key="front"
            className={styles.card}
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
