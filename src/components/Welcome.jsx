import { useState, useContext, useEffect } from "react";
import { QuizContext } from "../context/quiz";

import "./Welcome.css";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (showButton) {
      const timer = setTimeout(() => {
        setButtonDisabled(false);
      }, 1); // 120000 milliseconds = 120 seconds

      return () => clearTimeout(timer);
    }
  }, [showButton]);

  const handleLinkClick = () => {
    setShowButton(true);
  };

  const handleButtonClick = () => {
    dispatch({ type: "CHANGE_STAGE" });
  };

  return (
    <div id="welcome">
      <h2>Etapa de leitura realizada com sucesso</h2>
      {/*<p>
        Antes de prosseguir para a próxima etapa, solicitamos que você assista
        o vídeo a seguir:
      </p>
      <a href="https://www.youtube.com/watch?v=2w-FNiySmKk" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>
        video
  </a>*/}
      <br></br>
      
      <p>
        <b>
          Clique no botão abaixo para prosseguir
          para a etapa de quiz
        </b>
      </p>
      {/*disabled={buttonDisabled}
      {showButton && ( tirou os parenteses e chave da 52 onde esta essa div ai*/}
        <button onClick={handleButtonClick} >
          Iniciar
        </button>
    </div>
  );
};

export default Welcome;