import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const containerVariants = {
  init: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" }
  }, exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
}

const nextVariants = {
  initial: { x: '100vw' },
  animate: { x: 0 }
}

const hoverVariets = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      yoyo: "Infinity"
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <motion.div className="base container"
      variants={containerVariants}
      initial="init"
      animate="animate"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li
              whileHover={{ scale: 1.3, x: 100, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
              key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{base}</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div
          variants={nextVariants}
          initial="init"
          animate="animate"
          transition={{ when: "beforeChildren" }}
          className="next">
          <Link to="/toppings">
            <motion.button
              variants={hoverVariets}
              whileHover={"hover"}>
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;