import "./home.css";
import { Link } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState} from "react";
import Cadastro from "../cadastro/cadastro";
import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
  const [aberto, setAbrir] = useState(false);
  const abreModal = () => setAbrir(true);
  const fechaModal = () => setAbrir(false);

  async function EventListener() {
    var lista = [];
    await axios.get("/movie/findMany").then(function (response) {
      lista = response.data;
    });
    console.log(lista);

    
    const inputValue = document.getElementById("myInput");
    const value = inputValue.value;
    console.log(value);
    var filme = {};
    lista.map((res) => {
      if (res.title === value) {
        filme = res;
      };
      return filme;
    });
    navigate(`/film/${filme.id}`)
  };

  return (
    <div className="home">
      <div className="search">
            <input placeholder="Pesquisar filme" id="myInput" type="text"></input>
            <button className="pesquisar" type="button" onClick={EventListener}>
                 &#10148;
            </button>  
      </div>
      <div className="init">
        <h3> Seu catálogo de filmes :)</h3>
        <br></br>
        <p> Acesse sua conta e veja seus filmes favoritos!</p>
        <p> Essa é uma plataforma de streaming grátuita.</p>
      </div>
      <p className="cad">
        <strong> Não tem uma conta?</strong>
        <strong className="strong" onClick={abreModal}>
          {" "}
          Cadastre-se
        </strong>
      </p>
      <Link to="/list">
        <div className="homeList">
          <h3> Aqui você pode Confirir a lista de filmes cadastrados.</h3>
        </div>
      </Link>
      <Modal open={aberto} onClose={fechaModal} center showCloseIcon={false}>
        <Cadastro modal={fechaModal} />
      </Modal>
    </div>
  );
};
export default Home;
