import { useContext, useState } from "react";
import { QuizContext } from "../context/quiz";

import Option from "./Option"; 

import "./Question.css";
import AudioQuiz from "./AudioQuiz";
import { addResponse, getOption, getQuestions } from "./requests";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];
  const userId = parseInt(quizState.userId); // Extract userId from quizState

  const onSelectOption = async (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestion.answer, option },
    });


  if (userId) {
    try {
      const questionId = parseInt((await getQuestions(currentQuestion.question))[0]);
      const selectedOptionId = parseInt((await getOption(currentQuestion.answer))[0]);
      addResponse(userId, questionId, selectedOptionId);
      
    } catch (error) {
      console.log("Erro, response não cadastrada", error);
    }
  } else {
    console.log("UserID é nulo. Não é possível adicionar resposta.");
  }



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
