import Login from "../login";
import { useState } from "react";
import Recovery from "../recovery";
import Register from "../register";

function Layout({ children }) {
  const [visibleLogin, setVisibleLogin] = useState(false);
  const [visibleRecovery, setVisibleRecovery] = useState(false);
  const [visibleRegister, setVisibleRegister] = useState(false);
  return (
    <main className="flex flex-col min-h-screen max-w-[1140px] mx-auto">
      <section className="flex-1">
        <div>{children}</div>
      </section>
      {/* Account */}
      <div
        className={`z-[90] absolute inset-0 flex justify-center items-center  ${
          visibleLogin ? "visible" : "invisible"
        }`}
      >
        <div
          className="absolute inset-0"
          onClick={() => {
            setVisibleLogin(false);
          }}
        ></div>
        <Login
          visible={visibleLogin}
          visibleState1={setVisibleLogin}
          visibleState2={setVisibleRecovery}
          visibleState3={setVisibleRegister}
        />
      </div>
      <div
        className={`z-[90] absolute inset-0 flex justify-center items-center  ${
          visibleRecovery ? "visible" : "invisible"
        }`}
      >
        <div
          className="absolute inset-0"
          onClick={() => {
            setVisibleRecovery(false);
          }}
        ></div>
        <Recovery
          visible={visibleRecovery}
          visibleState1={setVisibleRecovery}
          visibleState2={setVisibleLogin}
        />
      </div>
      <div
        className={`z-[90] absolute inset-0 flex justify-center items-center  ${
          visibleRegister ? "visible" : "invisible"
        }`}
      >
        <div
          className="absolute inset-0"
          onClick={() => {
            setVisibleRegister(false);
          }}
        ></div>
        <Register
          visible={visibleRegister}
          visibleState1={setVisibleRegister}
          visibleState2={setVisibleLogin}
        />
      </div>
      <p
        onClick={() => {
          setVisibleLogin(true);
        }}
      >
        Login
      </p>
    </main>
  );
}

export default Layout;
