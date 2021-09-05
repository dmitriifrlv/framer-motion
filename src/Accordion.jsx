import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
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
