import { Container } from "./styles";
import { FiPlus } from "react-icons/fi";

export function NovoMarcador({ title, ...rest}) {
  return(
    <Container {...rest}>
      { title }
      <FiPlus></FiPlus>
    </Container>
  );
}