import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import { useState } from "react";
import axios from "axios"; // Importe o axi
import { addUser as submitUser } from "./requests";

import "./Home.css";
import AudioPrimeiraEtapa from "./AudioPrimeiraEtapa";

let UrlDefault = "http://127.0.0.1:8000/"

const Home = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const [birthday, setBirthday] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Adiciona o estado para armazenar o email
  const [selectedGender, setSelectedGender] = useState(""); // Adiciona o estado para armazenar o gênero selecionado

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "dateNasc") {
      setBirthday(value); // Atualize o estado da data de nascimento
    }
    // Pode adicionar mais condições para outros campos se necessário
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const addUser = async () => {
    try {
      // Log do estado antes da requisição
      console.log("State antes da requisição:", { name, birthday, selectedGender, email });
      submitUser(name, birthday, selectedGender, email)
      const user = await submitUser(name, birthday, selectedGender, email);

      console.log("Usuário adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  };
  
  

  const handleContinue = () => {
    // Adiciona a chamada para a função addUser antes de dispatch
    addUser();

    // Continua com o dispatch normalmente
    dispatch({ type: "HOME_PAGE" });
  };


  return (
    <div className="form-control">
      <AudioPrimeiraEtapa />
      <form className="campoNome">
        <label className="nome" htmlFor="name">
          Nome:
        </label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
          placeholder="Digite seu Nome"
          required
        />
      </form>
      <form className="campoNome">
        <label className="dateNasc" htmlFor="dateNasc">
          Data de nascimento:
        </label>
        <input
          onChange={handleChange}
          type="date"
          name="dateNasc"
          id="dateNasc"
          placeholder="Digite tua data ai o"
          required
        />
      </form>
      <form className="campoEmail">
        <label className="email" htmlFor="email">
          Email:
        </label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu Email"
          required
        />
      </form>

      <label className="genero" htmlFor="gender">
        Gênero:
      </label>
      <select id="gender" onChange={handleGenderChange} required>
        <option value="">Selecione um gênero</option>
        <option value="M">Masculino</option>
        <option value="F">Feminino</option>
        <option value="outro">Prefiro não responder</option>
      </select>
      <br></br>
      <button type="button" onClick={handleContinue}>
        Continuar
      </button>
    </div>
  );
};

export default Home;
