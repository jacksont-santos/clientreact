import './login.css';
import {Link} from "react-router-dom";

const Login = () => {
    return (
      <div className='log'>
      <img src="./rolofilme.jpg" alt="background" className='background'></img>
      <Link to="/">
        <div className="pi">Página Inicial</div>
      </Link>
        <div className="container">
          <h1>Login</h1>
          <div className="label-float">
            <input type="text" id="usuario" placeholder=""></input>
            <label for="usuario"><strong>Usuario</strong></label>
          </div>
          <div className="label-float">
            <input type="password" id="senha" placeholder=""></input>
            <label for="senha"><strong>Senha</strong></label>
          </div>
          <div className="justify-content">
            <button className='entrar'><strong>Entrar</strong></button>
          </div>
          <div className="justify-content"><hr></hr>
          </div>
          <p> <strong> Não tem uma conta?</strong>
            <strong className='strong'> Cadastre-se</strong>
          </p>
        </div>
        </div>
    );
};

export default Login;