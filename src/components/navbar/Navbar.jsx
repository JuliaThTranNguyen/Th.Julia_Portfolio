import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
         
         </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100007700595810">
          <img src="/facebook.png" alt="#Facebook" />
          </a>
          <a href="https://www.instagram.com/nguyenthuyhientran/">
            <img src="/instagram.png" alt="#Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/thuy-hien-tran-nguyen-072464174/">
            <img src="/linkedIn.png" alt="#linkedIn" />
          </a>
          <a href="https://github.com/JuliaThTranNguyen">
            <img src="/github.png" alt="#github" />
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
