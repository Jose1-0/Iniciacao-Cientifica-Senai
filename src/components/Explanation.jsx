import { useContext } from "react";
import { QuizContext } from "../context/quiz";


import "./Explanation.css";

const Explanation = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="text">
        <h2>Seja bem-vindo!</h2>
        <p> Esse protótipo faz parte de um projeto de iniciação científica do Centro Universitário Senai <b>UniSenai - Londrina</b>. O objetivo desse projeto é entender elementos que influenciam na aprendizagem online. Para isso, lhe convidamos a participar de um estudo que deve durar entre 5 e 15 minutos. Ao participar desse estudo, você irá passar por três etapas: ler um texto instrucional, responder um quiz com cinco questões de múltipla-escolha e responder algumas questões sobre sua experiência com o site. É importante ressaltar que esse protótipo pode fazer uso de efeitos sonoros. Por isso, solicitamos que você use um fone de ouvido <b>preferencialmente</b> ou habilite a caixa de som de seu dispositivo”
        </p>
    
        <p>Sua participação é voluntária, não envolve riscos físicos ou mentais, trará contribuições para seus conhecimentos sobre nutrição básica, e será de grande contribuição para o avanço das pesquisas científicas realizadas no âmbito do <b>UniSenai - Londrina</b>. Você pode desistir de participar do estudo ou retirar seu consentimento a qualquer momento sem qualquer consequência. Todos os seus dados serão armazenados de forma anônima e serão usados exclusivamente para fins de pesquisa científica. Caso tenha dúvidas, sugestões ou observações, entre em contato conosco: Luiz Rodrigues <b>luiz.rodrigues@sistemafiep.org.br</b></p>
        <button onClick={() => dispatch({ type: "EXPLANATION _PAGE" })}>Continuar</button>
        
        <p id="termo"><b>Ao clicar em continuar, você concorda em participar do presente estudo, conforme o descrito acima.</b></p>
    </div>
  )
}

export default Explanation