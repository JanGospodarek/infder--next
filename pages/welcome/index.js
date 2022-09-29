import styles from "../../styles/WelcomeScreen.module.css";
import logo from "../../public/inder-logo.png";
import Image from "next/image";
import Button from "../../components/Button";
import { useRouter } from "next/router";
export default function WelcomeScreen() {
  const router = useRouter();
  function logIn() {
    router.push("/welcome/log");
  }
  function regIn() {
    router.push("/welcome/register");
  }
  return (
    <div className={styles.welcomeDiv}>
      <Image src={logo}></Image>
      <div className={styles.buttonDiv}>
        <Button onClick={logIn} textContent={"Zaloguj się"}></Button>
        <Button onClick={regIn} textContent={"Zarejestruj się"}></Button>
      </div>
    </div>
  );
}
