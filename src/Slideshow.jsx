import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COLORS = [
  "var(--red)",
  "var(--blue)",
  "var(--purp)",
  "var(--green)",
  "var(--black)",
];

export const Slideshow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const index = 0;

  return (
    <div>
      <AnimatePresence>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            console.log(offset.x);
          }}
          style={{
            height: 400,
            width: "100%",
            background: COLORS[index],
          }}
        />
      </AnimatePresence>
    </div>
  );
};
