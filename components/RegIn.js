import { useRef, useState } from "react";
import styles from "../styles/RegIn.module.css";
import Button from "./Button";
export default function RegIn(props) {
  const [correct, setCorrect] = useState(true);
  const nickName = useRef("");
  const name = useRef("");
  const passwd = useRef("");
  const passwd2 = useRef("");
  function submitHandler(e) {
    e.preventDefault();
    if (
      passwd2.current.value !== passwd.current.value ||
      passwd.current.value.split("").length < 8
    ) {
      passwd.current.value = "";
      passwd2.current.value = "";
      setCorrect(false);
    } else {
      const regInData = {
        name: name.current.value,
        nickName: nickName.current.value,
        password: passwd.current.value,
      };
      props.onRegIn(regInData);
      nickName.current.value = "";
      name.current.value = "";
      passwd.current.value = "";
      passwd2.current.value = "";
    }
  }
  return (
    <div className={styles.div}>
      <form onSubmit={submitHandler}>
        <label>Imie</label>
        <input ref={name} type="text"></input>
        <label>Nazwa użytkownika</label>
        <input ref={nickName} type="text"></input>
        <label>Hasło</label>
        <input ref={passwd} type="password"></input>
        <label>Potwierdź hasło</label>
        <input ref={passwd2} type="password"></input>
        <Button
          className={styles.button}
          textContent="Zarejestruj się"
        ></Button>
      </form>
    </div>
  );
}
