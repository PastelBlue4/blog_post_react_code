import { useRef, useState } from "react";
import "./ModalStyle.css";

import mokoko1 from "../images/mokoko1.png";
import mokoko2 from "../images/mokoko2.png";

export default function Modal() {
  const modal = useRef();

  const [onModal, setOnModal] = useState(false);
  const [email, setEmail] = useState();
  const [result, setResult] = useState();
  return (
    <>
      {onModal ? (
        <div
          className="ModalContainer"
          ref={modal}
          onClick={(e) => {
            if (e.target === modal.current) {
              setOnModal(false);
            }
          }}
        >
          <div className="Modal">
            <h1 className="ModalText">Write your email for save </h1>
            <span></span>
            <hr />
            <form>
              <input
                className="ModalInput"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.currentTarget.value)}
              />

              <button
                className="ModalButton"
                onClick={(e) => {
                  e.preventDefault();
                  setResult(email);
                  setOnModal(false);
                }}
              >
                save!
              </button>
            </form>
          </div>
        </div>
      ) : null}

      <div className="MainContainer">
        <div className="ImageContainer">
          <img src={mokoko1} alt="mokoko1" />
          <img src={mokoko2} alt="mokoko2" />
        </div>
        <p className="Text">
          청춘의 끓는 이성은 보라. 가치를 품었기 같지 가장 찬미를 능히 두손을
          용기가 사막이다. 품었기 굳세게 품에 되려니와, 가치를 피는 같이 피다.
          그와 하는 천지는 위하여서. 두손을 새가 피가 이성은 보라. 때까지 인간이
          풍부하게 발휘하기 능히 있는가? 물방아 하는 놀이 크고 기쁘며, 낙원을
          듣는다. 힘차게 용감하고 든 끓는다. 청춘 피부가 이상의 때까지 하여도
          꽃이 끝에 노래하며 위하여, 있다. 위하여 인간은 반짝이는 우리 역사를
          끓는 놀이 밝은 발휘하기 이것이다. 열락의 가지에 밥을 있는가? 심장은
          이상의 모래뿐일 물방아 사는가 청춘 인간의 영락과 투명하되
          그리하였는가? 속잎나고, 우는 창공에 풍부하게 말이다. 얼마나 찬미를
          길을 그들은 불러 안고, 위하여서, 힘차게 사막이다. 길을 위하여 원질이
          말이다. 투명하되 인간은 있을 때문이다. 가치를 천고에 얼마나 많이
          따뜻한 있으랴? 부패를 위하여 있는 있다. 천자만홍이 주는 예가
          유소년에게서 없으면 같은 몸이 있는가? 때까지 그들은 보이는 가장 구하기
          끝에 피에 되는 쓸쓸하랴? 피가 그들은 바로 내는 사막이다. 눈에 안고,
          귀는 보배를 심장은 인생의 설레는 사막이다. 찾아다녀도, 따뜻한 같으며,
          않는 어디 같지 예가 봄바람이다. 너의 무엇을 가는 얼음에 칼이다. 새
          있는 시들어 열락의 곳이 교향악이다. 우는 간에 천하를 든 타오르고
          위하여 운다. 장식하는 이 귀는 이상의 그들의 말이다. 눈이 꽃 끓는
          고행을 그들의 맺어, 쓸쓸하랴? 바이며, 같지 그림자는 봄바람이다.
        </p>
        <div className="ButtonContainer">
          <button
            className="Button"
            onClick={() => {
              setOnModal(true);
            }}
          >
            save!
          </button>
        </div>
        <span>{result}</span>
      </div>
    </>
  );
}
