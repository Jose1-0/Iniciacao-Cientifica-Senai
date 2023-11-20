import { createContext, useReducer } from "react";
import questions from "../data/questions";

const STAGES = ["Hello", "Explanation", "TxtPage", "Start", "Playing","End"]
//"Hello", 

const initialState = {
    gameStage: STAGES[1],
    questions,
    currentQuestion: 0,
    score: 0,
    answerSelected: false,
    userId: null,
  }
  
const quizReducer = (state, action) => {
  console.log(state, action)
    switch (action.type) {

      case "HOME_PAGE":
        return {
          ...state,
          gameStage: STAGES[2]
        }

      case "EXPLANATION _PAGE":
        return {
          ...state,
          gameStage: STAGES[0]
        }
      case "SET_USER_ID":
        return {
        ...state,
        userId: action.payload,
      }

      case "TXT_PAGE":
        return {
          ...state,
          gameStage: STAGES[3]
        }
     
      case "CHANGE_STAGE":
        return {
          ...state,
          gameStage: STAGES[4]
        }

      case "REORDER_QUESTIONS":
        const reorderedQuestions = state.questions.sort(() => {
          return Math.random() - 0.5;
        });
        
        return {
          ...state,
          question: reorderedQuestions,
        }

        case "CHANGE_QUESTION": {
          const nextQuestion = state.currentQuestion + 1;
          let endGame = false;
    
          if (!state.questions[nextQuestion]) {
            endGame = true;
          }


          return {
            ...state,
            currentQuestion: nextQuestion,
            gameStage: endGame ? STAGES[5] : state.gameStage,
            answerSelected: false,
          };
        };

        //esse case não vamo sprecisar pois n vamos reiniciar o jogo isso pode ser um botão de enviar
        case "NEW_GAME": {
          //colocar a logica pra salvar 
          console.log();
          return initialState;
        }

        case "CHECK_ANSWER": {
          if (state.answerSelected) return state;
    
          const answer = action.payload.answer;
          const option = action.payload.option;
          let correctAnswer = 0;
    
          if (answer === option) correctAnswer = 1;
    
          return {
            ...state,
            score: state.score + correctAnswer,
            answerSelected: option,
          };
        }

        default:
            return state;
    }
} 

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(quizReducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
