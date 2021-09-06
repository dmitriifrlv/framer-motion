import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const variants = {
  open: { opacity: 1, height: "auto" },
  closed: { opacity: 0, height: 0 },
};

const Accordion = () => {
  const [open, setOpen] = useState(false);
  return (
    <article>
      <h2 role="button" onClick={() => setOpen(!open)}>
        The Heading
      </h2>
      <AnimatePresence>
        {open && (
          <motion.div
            style={{ overflow: "hidden" }}
            variants={variants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
              animi quaerat nesciunt libero quo quis aliquid consequuntur magnam
              error! Doloremque commodi, sapiente in at aliquam sint nihil alias
              quasi a.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
};

export default Accordion;
