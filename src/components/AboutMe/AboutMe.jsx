// src/components/AboutMe.jsx

import React from 'react';
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import styles from './AboutMe.module.scss';
import { variants } from '../../assets/js/variants';

export const AboutMe = () => {
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['-1', '0'],
  });
  const headerSpring = useSpring(scrollYProgress, variants.springPhysics);
  const transformValue = useTransform(headerSpring, [0, 1], ['80px', '0px']);

  return (
    <motion.section
      className={styles.aboutMe}
      variants={variants.containerVariants}
      animate={isInView ? 'visible' : 'hidden'}
      ref={ref}
    >
      <div className={styles.aboutMe_header}>
        <motion.h2
          style={{ translateX: transformValue }}
          variants={variants.textVariants}
          className={styles.aboutMe_left}
        >
          Read more
        </motion.h2>
        <motion.h1
          variants={variants.textVariants}
          className={styles.aboutMe_title}
        >
          about me
        </motion.h1>
      </div>
      <motion.p
        variants={variants.textVariants}
        className={styles.aboutMe_text}
      >
        Hi, I’m Aisha—an undergraduate student at the University of Alberta,
        originally from Dubai, UAE. I’m currently diving deep into software
        development and AI while working as an Application & Infrastructure
        Analyst Co-op Student at the City of Edmonton (SDE Intern Role).
      </motion.p>
      <motion.p
        variants={variants.textVariants}
        className={styles.aboutMe_text}
      >
        I’ve built everything from REST APIs and database systems to playful UI
        experiments and machine learning models. I’m also an Intel oneAPI
        Student Ambassador and VP Product at UAlberta’s Blueprint
        Chapter. I love learning by building.
      </motion.p>
    </motion.section>
  );
};
