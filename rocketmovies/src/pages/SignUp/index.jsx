import { Container, Background } from "./styles";
import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return(
    <Container>
      <div className="form">
        <div className="title">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Crie sua conta</h2>
        <div className="login">
          <Input
            placeholder="Nome"
            type="text"
            icon={FiUser}
          />
          <Input
            placeholder="E-mail"
            type="email"
            icon={FiMail}
          />
          <Input
            placeholder="Senha"
            type="password"
            icon={FiLock}
          />
        </div>
        <Button title="Cadastrar"></Button>
        <div className="back">
          <FiArrowLeft></FiArrowLeft>
          <a href="#">Voltar para o login</a>
        </div>
      </div>
      <Background/>
    </Container>
  );
}