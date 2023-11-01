import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Collaboration </h2>
          <p>
            In the coding realm, collaboration is fundamental. Thriving in team
            environments, I value collective creativity and seamlessly integrate
            into diverse teams, contributing effectively to create projects
            greater than the sum of their parts. My collaborative spirit fosters
            innovation and camaraderie, enhancing the overall team dynamic.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2> Dedicated Worker</h2>
          <p>
            I approach every project with unwavering dedication and a strong
            work ethic, ensuring high-quality solutions through meticulous
            attention to detail and persistent problem-solving. My commitment
            transforms challenges into opportunities, shaping every line of code
            to perfection.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Problem-Solving</h2>
          <p>
            Coding is a puzzle, and I excel at solving it. I possess a natural
            aptitude for dissecting complex problems, breaking them down into
            manageable components, and devising elegant solutions. My analytical
            mindset allows me to identify issues swiftly and implement effective
            fixes. I embrace challenges as opportunities to innovate, turning
            obstacles into stepping stones toward success.
          </p>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Innovative Ideas</h2>
          <p>
            Innovation fuels my passion for web development. I constantly
            explore new technologies and trends, seeking out fresh and inventive
            ideas to enhance user experiences. My creative approach to
            problem-solving results in cutting-edge solutions that push the
            boundaries of what's possible. I believe that innovation is the
            heartbeat of progress, and I am dedicated to bringing imaginative
            concepts to life.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
