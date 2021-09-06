import { motion } from "framer-motion";
import React, { useState } from "react";
import { shuffle } from "lodash";

const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--purp)",
  "var(--green)",
  "var(--black)",
];

export const Squares = () => {
  const [colorList, setColorLis] = useState(COLORS);
  return (
    <div>
      <button onClick={() => setColorLis(shuffle(colorList))}>Shuffle</button>
      {colorList.map((color) => (
        <motion.div
          key={color}
          layout
          // transition={{
          //   damping: 10,
          //   stiffness: 10,
          // }}
          style={{
            background: color,
            height: 100,
            width: 100,
          }}
        />
      ))}
    </div>
  );
};
