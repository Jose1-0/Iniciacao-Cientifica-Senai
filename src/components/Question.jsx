import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option"; 

import "./Question.css";
import AudioQuiz from "./AudioQuiz";
import { addResponse } from "./requests";
const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext)
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const userId = quizState.userId;
  console.log(userId);

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });
    try {addResponse(userId, currentQuestion, option)}
    catch {console.log("Erro, response não cadastrada")}
  };
  
  return (
    <div id='question'>
      <AudioQuiz />
      <p>
        Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
      </p>
      <h2>{currentQuestion.question}</h2>
      <div id='options-container'>
        {currentQuestion.options.map((option) => (
          <Option 
            option={option}
            key={option}
            answer={currentQuestion.answer}
            selectOption={() => onSelectOption(option)}
          />
        ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
          Continuar
        </button>
      )}
    </div>
  )
}
export default Question;
