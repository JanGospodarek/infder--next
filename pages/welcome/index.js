import styles from "../../styles/WelcomeScreen.module.css";
import logo from "../../public/inder-logo.png";
import Image from "next/image";
import Button from "../../components/Button";
export default function WelcomeScreen() {
  return (
    <div className={styles.welcomeDiv}>
      <Image src={logo}></Image>
      <div className={styles.buttonDiv}>
        <Button textContent={"Zaloguj się"}></Button>
        <Button textContent={"Zarejestruj się"}></Button>
      </div>
    </div>
  );
}
