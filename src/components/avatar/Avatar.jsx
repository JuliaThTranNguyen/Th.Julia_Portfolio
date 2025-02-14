import "./avatar.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Avatar = () => {
  return (
    <div className="Avatar">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            Th.Julia - Hien Thuy Tran Nguyen
          </motion.h2>
          <div className="textRow"> {/* Added flex container */}
            <motion.h1 variants={textVariants}>
              A full-stack web developer
            </motion.h1>
            <motion.a
              href="https://resume.io/r/Su1pKuFJJ"
              className="clickable"
            >
              <button className="CVLink">View My CV</button>
            </motion.a>
          </div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
            className="smallImage"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Web App Developer & UI designer
      </motion.div>
      <div className="imageContainer">
        <img src="/julia.jpg" alt="" />
      </div>
    </div>
  );
};

export default Avatar;
