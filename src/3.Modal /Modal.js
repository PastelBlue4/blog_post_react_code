import { useRef, useState } from "react";

export default function Modal() {
  const modal = useRef(null);

  const [onModal, setOnModal] = useState(true);

  return (
    <>
      {onModal ? (
        <div
          ref={modal}
          onClick={(e) => {
            if (e.target === modal.current) {
              setOnModal(false);
              console.log("Modal off.");
            }
          }}
        >
          <div>modal something</div>
        </div>
      ) : null}
    </>
  );
}
