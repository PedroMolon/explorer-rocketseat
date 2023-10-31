import { Container } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiUnlock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Perfil() {
  return(
    <Container>
      <header>
        <FiArrowLeft></FiArrowLeft>
        <a href="#">Voltar</a>
      </header>
      <main>
        <div className="user">
          <img src="https://github.com/PedroMolon.png" alt="Foto do usuário" />
          <div id="elipse">
            <FiCamera></FiCamera>
          </div>
        </div>

        <div className="container1">
          <Input
            placeholder="Pedro Molon" 
            type="text"
            icon={FiUser}
          />
          <Input
            placeholder="pedroh.molonr@gmail.com"
            type="mail"
            icon={FiMail}
          />
        </div>
        <div className="container2">
          <Input
            placeholder="Senha atual"
            type="password"
            icon={FiLock}
          />
          <Input
            placeholder="Senha nova"
            type="password"
            icon={FiUnlock}
          />
        </div>
        <div className="button">
          <Button title="Salvar"></Button>
        </div>
      </main>
    </Container>
  );
}