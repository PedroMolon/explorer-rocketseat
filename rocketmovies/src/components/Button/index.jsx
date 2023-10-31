import { Container } from "./styles";

export function Button({ title, icon, ...rest}) {
  return(
    <Container {...rest}>
      { title }
      { icon }
    </Container>
  );
}