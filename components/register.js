import Cleave from "cleave.js/react";
import { useState } from "react";
import { exit } from "./utils/icons";

function Register(props) {
  const [nameInp, setnameInp] = useState("");
  const [surnameInp, setSurnameInp] = useState("");
  const [emailInp, setEmailInp] = useState("");
  const [phoneInp, setPhoneInp] = useState("");
  const [passwordInp, setPasswordInp] = useState("");
  const [confirmPasswordInp, setConfirmPasswordInp] = useState("");

  return (
    <form
      className={`relative text-sm sm:text-base space-y-6 sm:space-y-8 bg-white transition-all duration-500 p-8 sm:p-12 shadow-lg ${
        props.visible ? "scale-100 opacity-100" : "opacity-0 scale-50"
      }`}
    >
      <div
        className="absolute py-1.5 px-2.5 bg-primary right-0 top-0 cursor-pointer rounded-bl-full"
        onClick={() => {
          props.visibleState1(false);
        }}
      >
        <span className="inline-block w-5 h-5 text-white">{exit}</span>
      </div>
      <p className="text-xl sm:text-2xl text-center">Регистрация</p>
      <div className="grid sm:grid-cols-2 gap-4 ">
        <input
          className="w-full sm:w-[250px] md:w-[300px] bg-slate-100 py-3 px-2 sm:p-4 outline-none focus:bg-slate-200"
          type={"text"}
          value={nameInp}
          placeholder={"Имя"}
          onChange={(e) => {
            setnameInp(e.target.value);
          }}
        />
        <input
          className="w-full sm:w-[250px] md:w-[300px] bg-slate-100 py-3 px-2 sm:p-4 outline-none focus:bg-slate-200"
          type={"text"}
          value={surnameInp}
          placeholder={"Фамилия"}
          onChange={(e) => {
            setSurnameInp(e.target.value);
          }}
        />
        <input
          className="w-full sm:w-[250px] md:w-[300px] bg-slate-100 py-3 px-2 sm:p-4 outline-none focus:bg-slate-200"
          type={"email"}
          value={emailInp}
          placeholder={"E-mail"}
          onChange={(e) => {
            setEmailInp(e.target.value);
          }}
        />
        <Cleave
          value={phoneInp}
          onChange={(e) => {
            setPhoneInp(e.target.value);
          }}
          className="w-full sm:w-[250px] md:w-[300px] bg-slate-100 py-3 px-2 sm:p-4 outline-none focus:bg-slate-200"
          options={{
            prefix: "+998",
            blocks: [4, 2, 3, 2, 2],
            numericOnly: true,
          }}
        />
        <input
          className="w-full sm:w-[250px] md:w-[300px] bg-slate-100 py-3 px-2 sm:p-4 outline-none focus:bg-slate-200"
          type={"password"}
          value={passwordInp}
          placeholder={"Создайте пароль"}
          minLength={8}
          onChange={(e) => {
            setPasswordInp(e.target.value);
          }}
        />
        <input
          className="w-full sm:w-[250px] md:w-[300px] bg-slate-100 py-3 px-2 sm:p-4 outline-none focus:bg-slate-200"
          type={"password"}
          value={confirmPasswordInp}
          placeholder={"Подтвердите пароль"}
          minLength={8}
          onChange={(e) => {
            setConfirmPasswordInp(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end">
        <input
          className="bg-primary text-white py-2 sm:px-5 sm:py-3 cursor-pointer"
          type={"submit"}
          value={"Продолжить"}
        />
        <div className="flex justify-center sm:-order-1">
          <span
            className="cursor-pointer mt-3 sm:mt-0 sm:mr-4"
            onClick={() => {
              props.visibleState1(false);
              props.visibleState2(true);
            }}
          >
            Назад
          </span>
        </div>
      </div>
    </form>
  );
}

export default Register;
