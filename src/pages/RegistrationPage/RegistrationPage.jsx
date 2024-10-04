import style from "./RegistrationPage.module.css";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";

export default function RegistrationPage() {
  return (
    <div className={style.wrapper}>
      <RegistrationForm />
    </div>
  );
}
