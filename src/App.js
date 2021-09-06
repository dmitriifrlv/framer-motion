import { useState, useRef } from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Modal from "./Modal";
import Accordion from "./Accordion";
import Nav from "./Nav";

function App() {
  const [isActive, setIsActive] = useState(true);
  const [toggle, setToggle] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Header>
        <Menu onClick={() => setIsNavOpen(!isNavOpen)} />
        <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <h1>Header</h1>
      </Header>
      <Container>
        <h2>Super Cool</h2>
        <button onClick={() => setToggle(!toggle)}>Toggle</button>
        <Modal toggle={toggle} setToggle={setToggle}>
          <Card style={{ background: "var(--purp)" }}>
            <h3>Some card</h3>
            <img src={purp} alt="card" />
          </Card>
        </Modal>
        <Accordion />
        <CardGrid>
          <Card
            dragConstraints={{
              top: -100,
              left: -100,
              right: 100,
              bottom: 100,
            }}
            drag
            // whileHover={{ scale: [1.1, 0.7, 1.2] }}
            style={{ background: "var(--purp)" }}
          >
            <h3>Some card</h3>
            <img src={purp} alt="card" />
          </Card>
          <Card
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            drag="x"
            style={{
              x,
              opacity,
              background: "var(--blue)",
            }}
          >
            <h3>Some card</h3>
            <img src={blue} alt="card" />
          </Card>
          <Card drag style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} alt="card" />
          </Card>
          <AnimatePresence>
            {isActive && (
              <motion.div exit={{ height: 0, overflow: "hidden" }}>
                <Card
                  dragConstraints={{
                    left: 0,
                    right: 0,
                  }}
                  drag="x"
                  onDragEnd={(event, info) => {
                    console.log(event, info);
                    if (info.point.x > 200) {
                      setIsActive(false);
                    }
                  }}
                  style={{ background: "var(--green)" }}
                >
                  <h3>Some card</h3>
                  <img src={green} alt="card" />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
