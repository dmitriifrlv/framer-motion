import { AnimatePresence, motion } from "framer-motion";

const Modal = ({ toggle, children, setToggle }) => {
  return (
    <AnimatePresence>
      {toggle && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate3d(-50%, -50%, 0)",
          }}
        >
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
          >
            <button onClick={() => setToggle(!toggle)}>Close</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
