import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import { useState } from "react";


import "./Home.css";
import AudioPrimeiraEtapa from "./AudioPrimeiraEtapa";

const Home = () => {


  const [quizState, dispatch] = useContext(QuizContext);

  const [name, setName] = useState("");

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
      <form className='campoEmail'>
        <label className='email' htmlFor='email'>Email: </label>
        <input 
          type='email' 
          name='email' 
          id='email' 
          placeholder='Digite seu Email' 
          required></input>
        
        <br></br>
        {/*<input className='lgpd' 
        type='checkbox' 
        id='LGPD'
        required>
        </input>
        <label className='pego' for="LGPD">LGPD</label>*/}
        
        <button type='submit' onClick={() => dispatch({ type: "HOME_PAGE" })}>Continuar</button>
        
          
        
       
      </form>
    </div>


  )
}

export default Home