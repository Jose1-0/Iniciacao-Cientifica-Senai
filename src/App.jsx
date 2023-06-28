import { useContext, useEffect } from 'react';
import { QuizContext } from "./context/quiz";

import Welcome from './components/Welcome';
import Question from './components/Question';
import GameOver from './components/GameOver';
import Home from './components/Home';
import Explanation from './components/Explanation';

import "./App.css";
import TextPage from './components/TextPage';
//import TextPage from './components/TextPage';
import uniSenai from "./img/uniSenai.png";



function InicioQuiz() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, [])
  return (
    <div className='appQuiz'>
      <table className='title'>
      <tr>
          <th><img className='imagem' src={uniSenai} alt="logo" /></th>
          <th><h1  className='titulo'>Iniciação Científica</h1></th>
      </tr>
      </table>
      <div id="linha-horizontal"/>
      {quizState.gameStage === "TxtPage" && <TextPage />}
      {quizState.gameStage === "Explanation" && <Explanation/>}
      {quizState.gameStage === "Hello" && <Home />}
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}

    </div>
  );
}

export default InicioQuiz;