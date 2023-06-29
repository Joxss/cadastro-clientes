import React from "react";
import { useNavigate } from 'react-router-dom'
import Header from "../../Components/Header/Header";
import "./Home.css"

const Home = () => {
  const navigate = useNavigate();

  const GoToForm = () => {
    navigate("/form")
  }

  const GoToList = () => {
    navigate("/list")
  }
  return (
    <>
      <Header/>
      <div className="home-container">
        <button onClick={GoToList}>Listar clientes</button>
        <button onClick={GoToForm}>Cadastrar cliente</button>
      </div>
    </>
  )
}

export default Home;