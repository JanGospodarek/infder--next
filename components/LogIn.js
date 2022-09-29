import { useRef } from "react";
import { useState } from "react";
import Button from "./Button";
import styles from "../styles/LogIn.module.css";
export default function LogIn(props) {
  const nickName = useRef();
  const passwd = useRef();
  function submitHandler(e) {
    e.preventDefault();

    const logInData = {
      nickName: nickName.current.value,
      password: passwd.current.value,
    };
    props.onLogIn(logInData);
    nickName.current.value = "";
    passwd.current.value = "";
  }
  return (
    <div className={styles.div}>
      <form onSubmit={submitHandler}>
        <label>Nazwa użytkownika</label>
        <input ref={nickName} type="text"></input>
        <label>Hasło</label>
        <input ref={passwd} type="password"></input>
        <Button className={styles.button} textContent="Zaloguj się"></Button>
      </form>
    </div>
  );
}
