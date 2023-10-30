import { useContext } from "react";
import { QuizContext } from "../context/quiz";


import "./TextPage.css";
import Audio from "./Audio";
import AudioLeituraTexto from "./AudioLeituraTexto";

const TextPage = () => {
    const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div>
        <AudioLeituraTexto />
        <div className="text">
        <h2>Nutrição e seus impacto no cotidiano</h2>
        <p>A nutrição é fundamental para a saúde e o bem-estar humano. Ela envolve a escolha de alimentos que fornecem nutrientes essenciais para o corpo humano, incluindo vitaminas, minerais, proteínas, carboidratos e gorduras. Quando uma dieta equilibrada é seguida, ela pode melhorar a qualidade de vida, prevenir doenças e manter um peso corporal saudável.</p>
        
        <p>Uma alimentação saudável é importante desde a infância, quando o corpo está em desenvolvimento. Uma dieta adequada pode ajudar a garantir que as crianças cresçam e se desenvolvam normalmente. Isso inclui o desenvolvimento do cérebro, ossos, músculos e sistema imunológico.</p>

        <p>Na idade adulta, a nutrição continua a desempenhar um papel vital na manutenção da saúde e do bem-estar. Dietas inadequadas podem levar a uma série de problemas de saúde, incluindo obesidade, diabetes, doenças cardíacas, câncer e outros problemas de saúde.</p>

        <p>A nutrição também pode afetar a saúde mental. Estudos mostram que dietas ricas em alimentos processados e açúcar podem aumentar o risco de depressão, enquanto dietas ricas em nutrientes essenciais, como vitaminas e minerais, podem ajudar a reduzir o risco.</p>

        <p>Além de seus benefícios para a saúde, a nutrição também pode afetar o desempenho físico e mental. Atletas, por exemplo, precisam de uma dieta adequada para garantir que tenham energia suficiente para treinar e competir. Estudantes também podem se beneficiar de uma alimentação saudável, que pode ajudar a melhorar a concentração e o desempenho acadêmico.</p>

        <p>Uma alimentação saudável não precisa ser complicada. A chave é escolher alimentos variados e balanceados. Vegetais, frutas, cereais integrais, proteínas magras e gorduras saudáveis são todos importantes para uma dieta equilibrada.</p>

        <p>As vitaminas e os minerais podem ser obtidos de uma variedade de alimentos, incluindo frutas e vegetais frescos, grãos integrais, carnes magras, laticínios e nozes. Os carboidratos podem ser encontrados em alimentos como arroz, macarrão, pão, batata e milho. As proteínas podem ser encontradas em carne magra, frango, peixe, tofu, legumes e nozes.</p>

        <p>Embora possa ser tentador seguir dietas da moda ou restringir alimentos para perder peso rapidamente, isso pode ser prejudicial à saúde. A melhor abordagem é seguir uma dieta equilibrada e variada, que inclua todos os grupos alimentares em porções adequadas.</p>

        <p>Além da escolha de alimentos saudáveis, é importante prestar atenção às porções e ao tamanho das refeições. Comer demais pode levar ao ganho de peso, enquanto comer muito pouco pode levar à falta de nutrientes essenciais.</p>

        <p>A nutrição é fundamental para a saúde e o bem-estar humano. Uma dieta equilibrada e variada pode ajudar a prevenir doenças, melhorar a qualidade de vida e manter um peso corporal saudável. É importante escolher alimentos saudáveis em porções adequadas e evitar dietas da moda ou extremas que podem ser prejudiciais.</p>
        <button onClick={() => dispatch({ type: "TXT_PAGE" })}>Continuar</button>
        </div>




    </div>
  )
}

export default TextPage