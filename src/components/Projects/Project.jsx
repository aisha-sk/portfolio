import React from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Projects.module.scss';
import { useParallax } from '../../assets/js/useParallax.js';
import { Link } from '../Link/Link.jsx';
import { variants } from '../../assets/js/variants.jsx';

export const Project = (props) => {
  const {
    primaryX,
    primaryY,
    secondaryX,
    secondaryY,
    onMouseMoveHandler,
    onMouseLeaveHandler,
  } = useParallax();
  const ref = React.useRef();
  const isInView = useInView(ref, { once: true });

  const projectTags = props.tags.map((tag) => (
    <li className={styles.project_tag} key={tag}>
      {tag}
    </li>
  ));

  return (
    <motion.article
      className={props.classes}
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants.containerVariants}
      style={{ translateY: props.translateValue }}
    >
      <motion.img
        onMouseMove={onMouseMoveHandler}
        onMouseLeave={onMouseLeaveHandler}
        whileHover={{
          scale: 1.05,
        }}
        style={{
          x: primaryX,
          y: primaryY,
        }}
        className={styles.project_image}
        variants={variants.imageVariants}
        animate={isInView ? 'visible' : 'hidden'}
        ref={ref}
        src={props.img}
        alt={props.alt}
        width="800"
        height="450"
      ></motion.img>

      <motion.div
        style={{
          x: secondaryX,
          y: secondaryY,
        }}
        variants={variants.textVariants}
      >
        <h3 className={styles.project_title}>{props.title}</h3>
        <ul className={styles.project_tags}>{projectTags}</ul>
      </motion.div>

      <motion.p
        variants={variants.textVariants}
        className={styles.project_description}
      >
        {props.description}
      </motion.p>

      <motion.div variants={variants.textVariants}>
        <Link
          name={'View project'}
          theme={'medium'}
          href={props.website}
          label={`Check out the ${props.title} website`}
        ></Link>
      </motion.div>
    </motion.article>
  );
};
