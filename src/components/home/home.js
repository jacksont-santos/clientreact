import "./home.css";
import {Link} from "react-router-dom";

const Home = () => {
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
            <Link to="/cadastro">
                <strong className="strong"> Cadastre-se</strong>
            </Link>
            </p>
            <Link to="/list">
                <div className="homeList">
                    <h3> Aqui você pode Confirir a lista de filmes cadastrados.</h3>
                 </div>
            </Link>      
        </div>
    )
};
export default Home;