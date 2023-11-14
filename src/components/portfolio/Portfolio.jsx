import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 0,
    title: "Introduction Website",
    img: "https://user-images.githubusercontent.com/49017322/232626283-ec6a60c2-cfeb-443d-ae73-1e2cf4e22fe6.png",
    desc: "This is a simple HTML webpage for self-introduction.",
    demo:"https://fs16-1-basic-html-bice.vercel.app/",
    tech:"Technologies: HTML, Formsubmit, Vercel"
  },
  {
    id: 1,
    title: "Weather App - UI design",
    img: "https://user-images.githubusercontent.com/49017322/221565215-7fb2c69a-197d-4d26-8e1b-7321613de876.png",
    desc: "This is a very simple & responsive weather forecast application written in React.",
    demo:"https://weather-forecast-eight-woad.vercel.app/",
    tech:"Technologies: ReactJs, REST APIs, Vercel"
  },
  {
    id: 2,
    title: "Shopping App - UI design",
    img: "https://user-images.githubusercontent.com/49017322/279810682-5af4b437-50f4-4c64-a161-b7c8008385a7.png",
    desc: "This is a simple UI design for an e-commerce app.",
    demo:"https://fs16-6-frontend-project-gamma.vercel.app/",
    tech:"Technologies: Typescript, Redux Query, Material UI, REST APIs, Vercel"
  },
  {
    id: 3,
    title: "Maido - UI design",
    img: "https://user-images.githubusercontent.com/49017322/279810649-8d6b602b-82f1-42f5-8212-e9f6512ac676.png",
    desc: "This is a copy of the UI design for the Maido website.",
    demo:"https://fs16-2-responsive-design.vercel.app/",
    tech:"Technologies: Typescript, SCSS, REST APIs, Vercel"
  },
  {
    id: 4,
    title: "Warehouse management system ",
    img: "https://user-images.githubusercontent.com/49017322/279810742-108a2dba-8a53-4b37-9f42-0d23eb294b32.png",
    desc: "This is an Admin Panel for a warehouse management application.",
    demo:"https://admin-panel-julia.vercel.app/login",
    tech:"Technologies: Next.Js, MongoDB & JWT tokens, NextAuth, Google Cloud Console, Amazon S3, TailwindCSS, Vercel"
  },
  {
    id: 5,
    title: "E-commercial App",
    img: "https://user-images.githubusercontent.com/49017322/279810762-2d74d466-6a2c-45a0-ba49-5862a0a625a0.png",
    desc: "This is an e-commerce app, which serves as the frontend application for the admin panel mentioned above.",
    demo:"https://e-commerce-julia.vercel.app/",
    tech:"Technologies: Next.Js, Google Cloud Console, TailwindCSS, Stripe Payment, Vercel"
  },
  {
    id: 6,
    title: "Personal Portfolio",
    img: "https://user-images.githubusercontent.com/49017322/280490781-3bf7fbb1-1cfc-4000-b1ae-eb35e4c67358.png",
    desc: "This is a simple personal portfolio.",
    demo:"https://th-julia-portfolio.vercel.app/",
    tech:"Technologies: ReactJs, Vite, EmailJS, Vercel"
  },
  {
    id: 7,
    title: "Travel Agency",
    img: "https://user-images.githubusercontent.com/49017322/282851205-ae9f431b-38c2-4e3b-9ea3-7943886c08fa.png",
    desc: "This is a simple - UI/UX design for a travel agency website.",
    demo:"https://travel-agency-fawn.vercel.app/",
    tech:"Technologies: ReactJs, NextJs, Tailwinds CSS, Vercel"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <a href={item.demo} target="_blank" rel="noopener noreferrer" className="clickable">
            <div className="imageContainer" ref={ref}>
              <img src={item.img} alt="" />
            </div>
          </a>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>{item.tech}</p>
            <a href={item.demo} target="_blank" rel="noopener noreferrer" className="clickable">
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
