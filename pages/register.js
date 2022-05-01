// import Head from "next/head";
// import Cleave from "cleave.js/react";
// import Layout from "../components/Layout";
// import { useState } from "react";

// function Register() {
//   const [nameInp, setnameInp] = useState("");
//   const [surnameInp, setSurnameInp] = useState("");
//   const [emailInp, setEmailInp] = useState("");
//   const [phoneInp, setPhoneInp] = useState("");
//   const [cityInp, setCityInp] = useState("");
//   const [streetInp, setStreetInp] = useState("");
//   const [blockInp, setBlockInp] = useState("");
//   const [homeInp, setHomeInp] = useState("");

//   return (
//     <>
//       <Head>
//         <title>Регистрация - Loft</title>
//         <meta name="description" content="Регистрация" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Layout>
//         <form className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
//           <div className="flex flex-col space-y-2">
//             <label>Имя</label>
//             <input
//               className="border p-2 sm:p-3 outline-none focus:border-primary"
//               type={"text"}
//               value={nameInp}
//               onChange={(e) => {
//                 setnameInp(e.target.value);
//               }}
//             />
//           </div>
//           <div className="flex flex-col space-y-2">
//             <label>Фамилия</label>
//             <input
//               className="border p-2 sm:p-3 outline-none focus:border-primary"
//               type={"text"}
//               value={surnameInp}
//               onChange={(e) => {
//                 setSurnameInp(e.target.value);
//               }}
//             />
//           </div>
//           <div className="flex flex-col space-y-2">
//             <label>E-mail</label>
//             <input
//               className="border p-2 sm:p-3 outline-none focus:border-primary"
//               type={"email"}
//               value={emailInp}
//               onChange={(e) => {
//                 setEmailInp(e.target.value);
//               }}
//             />
//           </div>
//           <div className="flex flex-col space-y-2">
//             <label>Номер телефона</label>
//             <Cleave
//               value={phoneInp}
//               onChange={(e) => {
//                 setPhoneInp(e.target.value);
//               }}
//               className="border p-2 sm:p-3 outline-none focus:border-primary"
//               options={{
//                 prefix: "+998",
//                 delimiter: " ",
//                 blocks: [4, 2, 3, 2, 2],
//                 numericOnly: true,
//               }}
//             />
//           </div>
//         </form>
//       </Layout>
//     </>
//   );
// }

// export default Register;
