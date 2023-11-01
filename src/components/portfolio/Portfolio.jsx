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
  },
  {
    id: 1,
    title: "Weather App - UI design",
    img: "https://user-images.githubusercontent.com/49017322/221565215-7fb2c69a-197d-4d26-8e1b-7321613de876.png",
    desc: "This is a very simple & responsive weather forecast application written in React.",
    demo:"https://weather-forecast-eight-woad.vercel.app/",
  },
  {
    id: 2,
    title: "Shopping App - UI design",
    img: "https://private-user-images.githubusercontent.com/49017322/274724355-691592f5-c57b-449b-b54b-228566d15234.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTg4NjY2MzksIm5iZiI6MTY5ODg2NjMzOSwicGF0aCI6Ii80OTAxNzMyMi8yNzQ3MjQzNTUtNjkxNTkyZjUtYzU3Yi00NDliLWI1NGItMjI4NTY2ZDE1MjM0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTAxVDE5MTg1OVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPThmN2NkYTVjNzMzZDdlMjQ1NzRiYmNmM2I0Y2YyZDQ2MjYzNWYyYjZkNDczNGUxZjkzOWYxMTM4MmM5MTkxMTkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.yuy-c_oXXevgIKMRBH3OoQ_JpfQWG98nicG__hj3NBg",
    desc: "This is a simple UI design for an e-commerce app.",
    demo:"https://fs16-6-frontend-project-gamma.vercel.app/",
  },
  {
    id: 3,
    title: "Maido - UI design",
    img: "https://private-user-images.githubusercontent.com/49017322/279779419-8cf9cee5-6f6c-4353-9061-fc6c837af4fb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTg4NjY5OTEsIm5iZiI6MTY5ODg2NjY5MSwicGF0aCI6Ii80OTAxNzMyMi8yNzk3Nzk0MTktOGNmOWNlZTUtNmY2Yy00MzUzLTkwNjEtZmM2YzgzN2FmNGZiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTAxVDE5MjQ1MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk1MTIxMDQ2ODU1ODU0N2UzY2QyZWQ4ODY2NDY1OWZjZWMxY2IzYzMyZDQxNjlhMmNjNTA4YWIwMjQyYWRhMTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.7edINuVTjAruKvV6m0sCI0rTUMn2WbUBFinO0aipj3A",
    desc: "This is a copy of the UI design for the Maido website.",
    demo:"https://fs16-2-responsive-design.vercel.app/",
  },
  {
    id: 4,
    title: "Warehouse management system - BE system",
    img: "https://private-user-images.githubusercontent.com/49017322/242374994-dd04871d-e9a7-412a-9ae9-abb11e6d0619.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTg4NjcxMzksIm5iZiI6MTY5ODg2NjgzOSwicGF0aCI6Ii80OTAxNzMyMi8yNDIzNzQ5OTQtZGQwNDg3MWQtZTlhNy00MTJhLTlhZTktYWJiMTFlNmQwNjE5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTAxVDE5MjcxOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdlZTQxMTVkZjkxOThhNDkzNzY0ZDVhOGQzMDg4NzVlMDllYWEwNzZlNjczNzk3YWQ5MjA3ZWZlNzAxMDcyZGQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.yPYbVaQ-mse1unOpm8kj0ByNE3fpsXAzhP5sSvXW-R4",
    desc: "This is an Admin Panel for a warehouse management application for an e-commerce service. This application written in NextJs",
    demo:"https://admin-panel-julia.vercel.app/login",
  },
  {
    id: 5,
    title: "E-commercial App - FE system",
    img: "https://private-user-images.githubusercontent.com/49017322/242379891-2efd0855-6251-4335-9092-95e5cf49737e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTg4Njc2NDMsIm5iZiI6MTY5ODg2NzM0MywicGF0aCI6Ii80OTAxNzMyMi8yNDIzNzk4OTEtMmVmZDA4NTUtNjI1MS00MzM1LTkwOTItOTVlNWNmNDk3MzdlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzExMDElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMTAxVDE5MzU0M1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWJlYzQyZWJiNGY0YWEwNjYyOGMzM2RjMWQ3NTNlNTkyYWFhNmE2ZWQxNGNlMDZiNmZkNzQ2ZTYxNjdhMWJkMmImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.EVSJvEsY33QKVPEyj1uxStTnxF9L1oqV8feRQuIL8E8",
    desc: "This is an e-commerce app, which serves as the frontend application for the admin panel mentioned above, designed for an e-commerce service. This application is written in Next.js.",
    demo:"https://e-commerce-julia.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleButtonClick = () => {
    window.open(item.demo, "_blank"); // Open the demo link in a new tab/window
  };

  return (
    <section>
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
          <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{ y }}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button onClick={handleButtonClick}>See Demo</button>
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
