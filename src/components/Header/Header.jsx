import {
  useScroll,
  useMotionValueEvent,
  motion,
  useAnimation,
  useTransform,
  useSpring,
} from 'framer-motion';
import React from 'react';
import styles from './Header.module.scss';
import { variants } from '../../assets/js/variants';

export const Header = () => {
  const { scrollY } = useScroll();
  const scrollYRange = [0, 100];
  const scaleSpring = useSpring(scrollY, variants.springPhysics);
  const scale = useTransform(scaleSpring, scrollYRange, [0, 1]);

  const controls = useAnimation();
  const delta = React.useRef(0);
  const lastScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, 'change', (val) => {
    const diff = Math.abs(val - lastScrollY.current);
    if (val >= lastScrollY.current) {
      delta.current = delta.current >= 10 ? 10 : delta.current + diff;
    } else {
      delta.current = delta.current <= -10 ? -10 : delta.current - diff;
    }
    if (val < 150) {
      controls.start('top');
    } else if (delta.current == 10 && val > 150) {
      controls.start('hidden');
    } else if (delta.current == -10 || val < 150) {
      controls.start('scrolled');
    }
    lastScrollY.current = val;
  });

  const NavLink = (props) => {
    const handleClick = (e) => {
      e.preventDefault();
      const element = document.getElementById(props.targetId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    };

    return (
      <li className={styles.nav_link} onClick={handleClick}>
        {props.title}
      </li>
    );
  };

  return (
    <motion.header
      className={styles.header}
      initial="visible"
      animate={controls}
      variants={variants.headerVariants}
    >
      <motion.div
        className={styles.header_border}
        style={{
          scaleX: scale,
        }}
      ></motion.div>

      <p className={styles.header_logo} onClick={() => location.reload()}>aisha-sk</p>

      <nav>
        <ul className={styles.nav_links}>
          <NavLink title={'home'} targetId={'home'} />
          <NavLink title={'projects'} targetId={'projects'} />
          <NavLink title={'about me & contact'} targetId={'about'} />
        </ul>
      </nav>
    </motion.header>
  );
};
