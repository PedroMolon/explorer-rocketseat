import { Container, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  return(
    <Container>
      <div className="form">
        <div className="title">
          <h1>RocketMovies</h1>
          <p>Aplicação para acompanhar tudo que assistir.</p>
        </div>
        <h2>Faça seu login</h2>
        <div className="login">
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
        <Button title="Entrar"></Button>
        <a href="#">Criar conta</a>
      </div>
      <Background/>
    </Container>
  );
}