const Cadastro = () => {
  return (
    <div>
      <form>
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
          type="data"
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
      </form>
    </div>
  );
};
export default Cadastro;