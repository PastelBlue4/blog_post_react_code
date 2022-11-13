import { useState } from "react";
import LoginPage from "./LoginPage";

function MainPage() {
  const [loginID, setLoginID] = useState("");
  function loginHandler(userName) {
    setLoginID(userName);
  }
  return (
    <>
      {loginID ? (
        <span>{`${loginID}님 환영합니다.`}</span>
      ) : (
        <LoginPage loginHandler={loginHandler} />
      )}
    </>
  );
}

export default MainPage;
