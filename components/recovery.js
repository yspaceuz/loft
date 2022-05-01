import { email, exit } from "./utils/icons";
import { useState } from "react";

function Recovery(props) {
  const [emailInp, setEmailInp] = useState("");
  return (
    <form
      className={`relative flex text-sm sm:text-base flex-col space-y-6 sm:space-y-8 bg-white transition-all duration-500 p-8 sm:p-12 shadow-lg ${
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
      <p className="text-xl sm:text-2xl text-center">Сбросить пароль</p>
      <div className="relative">
        <input
          className="w-full sm:w-[350px] bg-slate-100 py-3 pl-10 pr-2 sm:py-4 sm:pl-12 sm:pr-4 outline-none focus:bg-slate-200"
          type={"email"}
          placeholder={"E-mail"}
          value={emailInp}
          onChange={(e) => {
            setEmailInp(e.target.value);
          }}
        />
        <div className="absolute  left-3 sm:left-4 inset-y-0 flex items-center">
          <div className="w-5 h-5 select-none sm:w-6 sm:h-6 opacity-50">
            {email}
          </div>
        </div>
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

export default Recovery;
