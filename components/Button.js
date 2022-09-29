import styles from "../styles/Button.module.css";
export default function Button(props) {
  return (
    <button
      className={`${styles.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.textContent}
    </button>
  );
}
