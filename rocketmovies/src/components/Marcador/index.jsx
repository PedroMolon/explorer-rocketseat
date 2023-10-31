import { Container } from "./styles";
import { CgClose } from 'react-icons/cg';

export function Marcador({ title, ...rest}) {
  return(
    <Container {...rest}>
      {title}
      <CgClose></CgClose>
    </Container>
  );
}