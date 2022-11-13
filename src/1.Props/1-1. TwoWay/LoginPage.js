import { useState } from "react";

function LoginPage(props) {
  const [userName, setUserName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.loginHandler(userName);
  };

  const onChange = (e) => {
    setUserName(e.target.value);
  };
  return (
    <>
      <span>닉네임을 입력해 주세요.</span>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} />
        <button>제출</button>
      </form>
    </>
  );
}

export default LoginPage;
