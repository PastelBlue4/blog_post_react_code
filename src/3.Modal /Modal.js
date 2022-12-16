import { useRef, useState } from "react";

export default function Modal() {
  const modal = useRef(null);

  const [onModal, setOnModal] = useState(true);

  return (
    <>
      {onModal ? (
        <div
          ref={modal}
          style={{
            border: "1px solid black",
            width: "100%",
            height: "100vh",
            zIndex: "1",
          }}
          onClick={(e) => {
            if (e.target === modal.current) {
              setOnModal(false);
              console.log("Modal off.");
            }
          }}
        >
          <div
            style={{
              border: "1px solid black",
              width: "300px",
              height: "300px",
              backgroundColor: "skyblue",
            }}
          >
            modal something
          </div>
        </div>
      ) : null}

      <button
        style={{ marginLeft: "500px" }}
        onClick={() => {
          setOnModal(true);
          console.log("modal on");
        }}
      >
        모달 생성
      </button>
    </>
  );
}
