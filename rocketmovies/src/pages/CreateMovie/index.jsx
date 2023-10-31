import { Container } from "./styles";
import { Header } from "../../components/Header";
import { FiArrowLeft } from 'react-icons/fi';
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Marcador } from "../../components/Marcador";
import { NovoMarcador } from "../../components/NovoMarcador";
import { Button } from "../../components/Button";

export function CreateMovie() {
  return(
    <Container>
      <Header></Header>

      <main>
        <div className="container1">
          <div>
            <FiArrowLeft/>
            <a href="#">Voltar</a>
          </div>
          <h1>Novo filme</h1>
        </div>
        <div className="container2">
          <Input placeholder="Título" type="title"></Input>
          <Input placeholder="Sua nota (de 0 a 5)" type="number"></Input>
        </div>
        <div className="container3">
        <TextArea placeholder="Observações"></TextArea>
        </div>
        <div className="container4">
          <h1>Marcadores</h1>
          <div className="marcadores">
            <Marcador title="React"></Marcador>
            <NovoMarcador title="Novo marcador"></NovoMarcador>
          </div>
        </div>
        <div className="container5">
          <Button className="dark" title="Excluir filme"></Button>
          <Button title="Salvar alterações"></Button>
        </div>
      </main>
    </Container>
  );
}