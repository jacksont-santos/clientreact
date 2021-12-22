import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./cad.css";

const Cadastro = (props) => {
  const navigate = useNavigate();

  const modal = props.modal;


  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const name = evento.target.name.value;
    const email = evento.target.email.value;
    const birthdate = evento.target.birthdate.value;
    const password = evento.target.password.value;
    const passwordConfirmation = evento.target.confirmacao.value;
    const imageUrl = evento.target.imageUrl.value;

    const newUser = {
      name,
      email,
      birthdate,
      password,
      passwordConfirmation,
      imageUrl,
    };

    await axios
      .post("/user/create", newUser)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      modal();
    navigate("/");
  };

  const esvaziar = () => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let birthdate = document.getElementById("birthdate");
    let password = document.getElementById("password");
    let passwordConfirmation = document.getElementById("confirmacao");
    let imageUrl = document.getElementById("imageUrl");
    name.value = "";
    email.value = "";
    birthdate.value = "";
    password.value = "";
    passwordConfirmation.value = "";
    imageUrl.value = "";
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder=" Digite seu nome"
          required
        />
        <label htmlFor="name">
          <strong>Nome</strong>
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder=" Digite seu email"
          required
        />
        <label htmlFor="email">
          <strong>Email</strong>
        </label>
        <input
          type="date"
          name="birthdate"
          id="birthdate"
          placeholder=" Digite sua data de nascimento"
          required
        />
        <label htmlFor="birthdate">
          <strong>Data de nascimento</strong>
        </label>
        <input
          type="text"
          name="password"
          id="password"
          placeholder=" Digite a senha"
          required
        />
        <label htmlFor="password">
          <strong>Senha</strong>
        </label>
        <input
          type="text"
          name="confirmacao"
          id="confirmacao"
          placeholder=" Digite a senha novamente"
          required
        />
        <label htmlFor="confirmacao">
          <strong>Confirmação</strong>
        </label>
        <input
          type="text"
          name="imageUrl"
          id="imageUrl"
          placeholder=" Digite a url da imagem"
        />
        <label htmlFor="imageUrl">
          <strong>Imagem</strong>
        </label>
        <div className="justify-content">
          <button type="submit" className="sucess">
            <strong>Cadastrar</strong>
          </button>
          </div>
        <div className="justify-content">
          <button type="button" className="danger" onClick={esvaziar}>
            <strong>Apagar tudo</strong>
          </button>
          <button type="button" className="danger" onClick={modal}>
            <strong>Cancelar</strong>
          </button>
          </div>
      </form>
    </div>
  );
};

export default Cadastro;