import React from "react";
import { read, create } from "../axiosConfig/axiosService";
import { token_key } from "../axiosConfig/constant/baseURL";
import { setLocalStorage} from "./constant/tokenStorage"

let OtherFileContainer = () => {
  let login = () => {
    create("/api/login/admin", {
      email: "pankaj@koirala.com",
      password: "123456",
      userType: "ADMIN",
    })
      .then((res) => {
        console.log(res);
        console.log(res.data.data.token);
       setLocalStorage(token_key, res.data.data.token);

      })
      .catch((err) => console.log(err));
  };

  let getPersonalDetail = () => {
    read("/api/teaching/personalDetails").then((res) => {
      console.log("respones", res.data.data);
    });
  };

  return (
    <div>
      <div>login test</div>
      <button
        onClick={() => {
          login();
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          getPersonalDetail();
        }}
      >
        personalinfo
      </button>
      <button onClick={()=>{localStorage.removeItem(token_key); console.log("hello");} }>logout</button>
    </div>
  );
};
export default OtherFileContainer;
