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
    <section id="projects" className={styles.projects}>
      <motion.h2 className={styles.projects_header}>Projects</motion.h2>
      <div className={styles.projects_grid} ref={scrollRef}>
        {/* Machine Learning & AI */}
        <Project
          classes={styles.project}
          tags={['PyTorch', 'LLM Optimization', 'Time Series Forecasting']}
          title="Self-Improving Stock Price Predictor"
          description="A sophisticated stock price prediction model using PyTorch, focusing on LLM optimization and time series forecasting."
          website="https://github.com/aisha-sk/stock-price-predictor"
          img="/stock-chart.png"
          alt="Stock chart visualization"
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['Keras', 'Streamlit', 'Medical Imaging', 'Explainability']}
          title="Brain Tumor Classification Assistant"
          description="A medical imaging tool using Keras and Streamlit for brain tumor classification with explainable AI features."
          website="https://github.com/aisha-sk/brain-tumor-classifier"
          img="/brain-mri.png"
          alt="Brain MRI scan preview"
        />

        <Project
          classes={styles.project}
          tags={['LangChain', 'Python', 'Finance', 'LLM Automation']}
          title="Real-Time Financial Analysis with LLMs"
          description="An intelligent financial analysis system using LangChain and Python for automated market insights."
          website="https://github.com/aisha-sk/financial-analysis-llm"
          img="/financial-news.png"
          alt="Financial news dashboard"
        />

        <Project
          classes={[
            styles.project,
            windowSize[0] >= 680 ? styles.project_uneven : '',
          ].join(' ')}
          translateValue={windowSize[0] >= 680 ? translateValue : 0}
          tags={['React', 'Flask', 'OpenAI API', 'LLM', 'Multimodal Retrieval']}
          title="Multimodal Video Chat App"
          description="A web app that allows users to upload a YouTube video and ask questions about the content, returning smart, timestamped answers."
          website="https://github.com/aisha-sk/multimodal-video-chat"
          img="/youtube-chat.png"
          alt="YouTube chat interface mockup"
        />

        <Project
          classes={styles.project}
          tags={['Python', 'Scikit-Learn', 'SHAP', 'Real Estate', 'Explainable AI']}
          title="AI-Powered Property Recommendation System"
          description="A recommendation engine for property valuation, scoring similar homes using statistical models with SHAP explainability."
          website="https://github.com/aisha-sk/property-rec-system"
          img="/real-estate.png"
          alt="Real estate map and property cards image"
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
      </div>
    </section>
  );
};
