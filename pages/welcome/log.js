import LogIn from "../../components/LogIn";
export default function LogInPage() {
  function onLogIn(data) {
    console.log(data);
  }
  return <LogIn onLogIn={onLogIn}></LogIn>;
}
