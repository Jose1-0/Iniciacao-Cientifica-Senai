import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import { useState } from "react";


import "./Home.css";
import AudioPrimeiraEtapa from "./AudioPrimeiraEtapa";

const Home = () => {


  const [quizState, dispatch] = useContext(QuizContext);

  const [name, setName] = useState("");

  const [selectedGender, setSelectedGender] = useState(""); // Adiciona o estado para armazenar o gênero selecionado
  const [otherGender, setOtherGender] = useState(""); // Adiciona o estado para armazenar o gênero especificado pelo usuário

  const handleChange = (event) => {
    setName(event.target.value);
    
  };

  
  return (
    <div className='form-control'>
    <AudioPrimeiraEtapa />
      <form className='campoNome'>
        <label className='nome' htmlFor='name'>Nome: </label>
        <input 
          onChange={handleChange}
          type='text' 
          name='name' 
          id='name' 
          placeholder='Digite seu Nome' 
          required
        />
      </form>
      <form className='campoNome'>
        <label className='dateNasc' htmlFor='dateNasc'>Data de nascimento: </label>
        <input 
          onChange={handleChange}
          type="date" 
          name='dateNasc' 
          id='dateNasc' 
          placeholder='Digite tua data ai o' 
          required
        />
      </form>
      <form className='campoEmail'>
        <label className='email' htmlFor='email'>Email: </label>
        <input 
          type='email' 
          name='email' 
          id='email' 
          placeholder='Digite seu Email' 
          required>
          </input>
      </form>

      
        <label className='genero' htmlFor='gender'>Gênero: </label>
        <select id='gender' required>
          <option value=''>Selecione um gênero</option>
          <option value='masculino'>Masculino</option>
          <option value='feminino'>Ffeminino</option>
          <option value='outro'>Prefiro não responder</option>
        </select>
      <br></br>
      <button type='submit' onClick={() => dispatch({ type: "HOME_PAGE" })}>Continuar</button>
    </div>


  )
}

export default Home