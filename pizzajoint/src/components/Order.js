import { motion } from 'framer-motion';
import React, { useState } from 'react';


const containerVariants = {
  init: {
    opacity: 0,
    x: '100vw'
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      mass: 0.4,
      dampng: 8,
      when: "beforeChildren",
      staggerChildren: 0.4
    }
  }, exit: {
    x: "-100vh",
    transition: { ease: 'easeInOut' }
  }
}

const childVariants = {
  init: {
    opacity: 0
  },
  animate: {
    opacity: 1
  }
}


const Order = ({ pizza }) => {

  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => {
    setShowTitle(false);
  }, 4000);

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="init"
      animate="animate"
      exit="exit"
    >

      <h2>Thank you for your order :)</h2>

      <motion.p>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;