import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const svgVarants = {
  init: {
    rotate: -180,
    pathLength: 0,
  },
  animate: {
    rotate: 0,

    transition: { duration: 1 }
  }
}

const pathVarants = {
  init: {
    x: 10,
    y: -10,
    pathLength: 0
  },
  animate: {
    x: 0,
    y: 0,
    pathLength: 1,
    transition: {
      yoyo: "Infinity",
      duration: 1
    }
  }
}

const Header = () => {
  return (
    <header>
      <motion.div
        drag
        dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
        dragElastic={1}

        className="logo">
        <motion.svg
          variants={svgVarants}
          initial="init"
          animate="animate"
          className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVarants}
            initial="init"
            animate="animate"
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        className="title">
        <h1>Pizza Joint</h1>
      </motion.div>
    </header>
  )
}

export default Header;