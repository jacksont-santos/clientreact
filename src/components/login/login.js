import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import Cadastro from "./../cadastro/cadastro";
import axios from "axios";

const Login = () => {
  const [aberto, setAbrir] = useState(false);
  const AbreModal = () => setAbrir(true);
  const FechaModal = () => setAbrir(false);

  const navigate = useNavigate();

  const subLogin = async (evento) => {
    evento.preventDefault();
    const email = evento.target.email.value;
    const password = evento.target.password.value;
    const auth = {
      email,
      password
    };

    var token = await axios.post('/auth/login', auth)
    .then(function (response) {
      console.log(response);
      token = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    
    navigate(`/user/${token}`)
  }

  return (
    <div className="log">
      <img src="./rolofilme.jpg" alt="background" className="background"></img>
      <Link to="/">
        <div className="pi">Página Inicial</div>
      </Link>
      <div className="container">
        <form onSubmit={subLogin}>
          <h1>Login</h1>
          <div className="label-float">
            <input type="text" name="email"></input>
            <label htmlFor="usuario">
              <strong>email</strong>
            </label>
          </div>
          <div className="label-float">
            <input type="password" name="password"></input>
            <label htmlFor="senha">
              <strong>Senha</strong>
            </label>
          </div>
          <div className="justify-content">
            <button className="entrar" type="submit">
              <strong>Entrar</strong>
            </button>
          </div>
          <div className="justify-content">
            <hr></hr>
          </div>
          <p>
            <strong> Não tem uma conta?</strong>
            <strong className="strong" onClick={AbreModal}>
              Cadastre-se
            </strong>
          </p>
        </form>
      </div>
      <Modal open={aberto} onClose={FechaModal} center showCloseIcon={false}>
        <Cadastro modal={FechaModal} />
      </Modal>
    </div>
  );
};

export default Login;
