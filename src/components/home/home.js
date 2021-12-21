import "./home.css";
import {Link} from "react-router-dom";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from "react";
import Cadastro from "../cadastro/cadastro";

const Home = () => {

    const [aberto, setAbrir] = useState(false);
  const AbreModal = () => setAbrir(true);
  const FechaModal = () => setAbrir(false);

    return (
        <div className="home">
            <div className="search">
                <input placeholder="Pesquisar filme"></input>
                <button className="pesquisar">&#10148;</button>
            </div>
            <div className="init">
                <h3> Seu catálogo de filmes  :)</h3><br></br>
                <p> Acesse sua conta e veja seus filmes favoritos!</p>
                <p> Essa é uma plataforma de streaming grátuita.</p>
            </div>
            <p className="cad"><strong> Não tem uma conta?</strong>
                <strong className="strong" onClick={AbreModal}> Cadastre-se</strong>           
            </p>
            <Link to="/list">
                <div className="homeList">
                    <h3> Aqui você pode Confirir a lista de filmes cadastrados.</h3>
                 </div>
            </Link>
            <Modal open={aberto} onClose={FechaModal} center showCloseIcon={false}>
                <Cadastro modal={FechaModal}/>
            </Modal>     
        </div>
    );
};
export default Home;