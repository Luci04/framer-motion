import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

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


const containervarants = {
  init: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 }
  },
  exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div
      variants={containervarants}
      initial="init"
      animate="animate"
      exit="exit"
      className="toppings container">

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li
              whileHover={{ scale: 1.4, x: 100, color: "#f8e112" }}
              transition={{ type: "spring", stiffness: 300 }}
              key={topping} onClick={() => addTopping(topping)}>
              <span className={spanClass}>{topping}</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={hoverVariets}
          whileHover={"hover"}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;