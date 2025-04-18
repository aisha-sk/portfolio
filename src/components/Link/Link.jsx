import styles from './Link.module.scss';

export const Link = (props) => {
  const style =
    props.theme === 'large'
      ? styles.link_large
      : props.theme === 'medium'
      ? styles.link_medium
      : styles.link;

  return (
    <a
      className={style}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.label}
    >
      {props.name}
    </a>
  );
};
