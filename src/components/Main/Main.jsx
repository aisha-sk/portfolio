import styles from './Main.module.scss';
import { AboutMe } from '../AboutMe/AboutMe';
import { Contact } from '../Contact/Contact';
import { Intro } from '../Intro/Intro';
import { Projects } from '../Projects/Projects';
import { WorkExperience } from '../WorkExperience/WorkExperience';
import { FunSection } from '../FunSection/FunSection';

export const Main = (props) => {
  return (
    <main className={styles.main}>
      <Intro loaded={props.loaded} />
      <WorkExperience />
      <Projects />
      <div id="about" className={styles.main_aboutAndContact}>
        <AboutMe />
        <Contact />
      </div>
      <FunSection />
    </main>
  );
};
