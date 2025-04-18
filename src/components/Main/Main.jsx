import styles from './Main.module.scss';
import { AboutMe } from '../AboutMe/AboutMe';
import { Contact } from '../Contact/Contact';
import { Intro } from '../Intro/Intro';
import { Projects } from '../Projects/Projects';

export const Main = (props) => {
  return (
    <main className={styles.main}>
      <Intro loaded={props.loaded} />
      <Projects />
      <div className={styles.main_aboutAndContact}>
        <AboutMe />
        <Contact />
      </div>
    </main>
  );
};
