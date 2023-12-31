import { Container, Profile } from "./styles";
import { Input } from "../Input";

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>

      <Input placeholder="Pesquisar pelo título" type="text"></Input>

      <Profile>
        <div>
          <h1>Pedro Molon</h1>
          <a href="#">sair</a>
        </div>
        <img src="https://github.com/PedroMolon.png" alt="Foto do Usuário" />
      </Profile>
    </Container>
  );
}