import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Tags } from "../Tags";

export function Movie({ title, description, ...rest}) {
  return(
    <Container {...rest}>
      <div className="rating">
        <h1>{ title }</h1>
        <div className="stars">
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiFillStar></AiFillStar>
          <AiOutlineStar></AiOutlineStar>
        </div>
      </div>
      <h2>{ description }</h2>
      <div className="tags">
        <Tags title="Ficção Científica"></Tags>
        <Tags title="Drama"></Tags>
        <Tags title="Família"></Tags>
      </div>
    </Container>
  );
}