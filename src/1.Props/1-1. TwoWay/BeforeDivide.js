import { useState } from "react";

function BeforeDivide() {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLogin(true);
    setUserName(userName);
  };

  const onChange = (e) => {};

  return (
    <>
      {isLogin ? (
        <span>{userName}</span>
      ) : (
        <div>
          <span>닉네임을 입력해 주세요.</span>
          <form onSubmit={onSubmit}>
            <input onChange={onChange} />
            <button>제출</button>
          </form>
        </div>
      )}
    </>
  );
}

export default BeforeDivide;
