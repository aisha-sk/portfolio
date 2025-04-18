// src/components/Projects.jsx

import React from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from 'framer-motion';
import styles from './Projects.module.scss';
import { Link } from '../Link/Link';
import { Project } from './Project';
import { variants } from '../../assets/js/variants';

export const Projects = () => {
  const ref = React.useRef();
  const scrollRef = React.useRef();
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['-0.5', '1'],
  });
  const spring = useSpring(scrollYProgress, variants.springPhysics);
  const translateValue = useTransform(spring, [0, 1], ['200px', '-450px']);

  const [windowSize, setWindowSize] = React.useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  React.useEffect(() => {
    const handleResize = () =>
      setWindowSize([window.innerWidth, window.innerHeight]);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={styles.projects}>
      <motion.h2 className={styles.projects_header}>Projects</motion.h2>
      <div className={styles.projects_grid} ref={scrollRef}>
        {/* Machine Learning & AI */}
        <Project
          classes={styles.project}
          tags={['Python', 'Pillow', 'Matplotlib']}
          title="Bees: Image Loading and Processing"
          description="Can a machine distinguish between a honey bee and a bumble bee? I used Pillow to load, transform, and build an image-processing pipeline, then visualized the results."
          website="https://github.com/aisha-sk/Bees-Image-Loading-and-Processing"
          img="/bee1.png"
          alt="Image loading pipeline for bee classification"
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['Python', 'Scikit-learn']}
          title="Bees: Predict Species from Images"
          description="Built a classifier to identify honey bees vs. bumble bees using traditional ML techniques and image features."
          website="https://github.com/aisha-sk/Bees-Predict-Species-from-Images"
          img="/bee2.png"
          alt="Bees species prediction pipeline"
        />

        <Project
          classes={styles.project}
          tags={['Keras', 'TensorFlow', 'NumPy']}
          title="Bees: Deep Learning with Images"
          description="Developed a CNN in Keras to automatically detect honey bees and bumble bees, leveraging transfer learning for improved accuracy."
          website="https://github.com/aisha-sk/Bees-Deep-Learning-with-Images"
          img="/bee3.png"
          alt="Deep learning model for bee detection"
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['PyTorch', 'Transfer Learning']}
          title="Sloth vs. Pastry: Image Classification"
          description="A playful binary classifier that tells sloth from pain au chocolat using PyTorch and transfer learning on a custom dataset."
          website="https://github.com/aisha-sk/Sloth-vs-Pastry-PyTorch"
          img="/sloth.png"
          alt="Sloth vs pastry classifier UI"
        />

        <Project
          classes={styles.project}
          tags={['TensorFlow', 'Neural Style Transfer']}
          title="Neural Style Transfer"
          description="Blended the content of one image with the style of another using deep CNNs in TensorFlow to create unique artworks."
          website="https://github.com/aisha-sk/neural-style-transfer"
          img="/style.png"
          alt="Artistic style transfer result"
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['Keras', 'E-commerce', 'Image Classification']}
          title="E‑commerce Clothing Classifier"
          description="Built a smart garment classification system with Keras to improve product tagging and search for online retailers."
          website="https://github.com/aisha-sk/ecommerce-clothing-classifier-keras"
          img="/clothing.png"
          alt="Clothing classifier demo"
        />

        {/* Web Development */}
        <Project
          classes={styles.project}
          tags={['React', 'Express', 'DALL·E']}
          title="AI Image Generator App"
          description="React + Express app integrating DALL·E for community-driven image creation and sharing."
          website="https://github.com/aisha-sk/ai-image-generator"
          img="/dalle.png"
          alt="AI Image Generator UI"
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['React', 'Axios', 'Custom Hooks']}
          title="React Blog"
          description="A blog built with React and custom hooks, hosted on Netlify, showcasing Axios-based API calls."
          website="https://github.com/aisha-sk/react-blog"
          img="/blog.png"
          alt="React Blog homepage"
        />

        <Project
          classes={styles.project}
          tags={['JavaScript', 'HTML', 'CSS']}
          title="Etch‑a‑Sketch"
          description="An interactive drawing board made to practice DOM manipulation with vanilla JavaScript."
          website="https://aisha-sk.github.io/etch-a-sketch/"
          img="/etch.png"
          alt="Etch-a-Sketch drawing board"
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['HTML', 'CSS', 'JavaScript']}
          title="Amazon Frontend Clone"
          description="A work‑in‑progress clone of Amazon’s UI, including home, orders, and checkout pages."
          website="https://aisha-sk.github.io/amazon-clone1/index.html"
          img="/amazon.png"
          alt="Amazon clone UI"
        />

        <Project
          classes={styles.project}
          tags={['JavaScript']}
          title="Rock Paper Scissors"
          description="Classic RPS game built with JavaScript—first to 5 points wins!"
          website="https://aisha-sk.github.io/rock-paper-scissors/"
          img="/rock.png"
          alt="Rock Paper Scissors game"
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['JavaScript', 'DOM']}
          title="Drum Kit"
          description="A keyboard‑driven drum kit to practice DOM events—tap keys to play sounds."
          website="https://aisha-sk.github.io/drumKit/"
          img="/drum.png"
          alt="Drum Kit interface"
        />

        {/* Database & Miscellaneous */}
        <Project
          classes={styles.project}
          tags={['MySQL', 'Python']}
          title="Bank Management System"
          description="A CLI‑based banking system with user registration, loan processing, deposits, and admin captcha verifications."
          website="https://github.com/aisha-sk/BankSystem"
          img="/bank.png"
          alt="Bank Management System screenshot"
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['Python', 'Chatbot']}
          title="First‑Aid Bot"
          description="A chatbot providing nearby hospitals, emergency contacts, and first‑aid instructions on demand."
          website="https://github.com/aisha-sk/FirstAidChatBot"
          img="/bot.png"
          alt="First-Aid Bot chat UI"
        />
      </div>
    </section>
  );
};
