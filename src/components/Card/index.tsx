import * as S from "./styles";
export interface ICard {
  texto: string
}
export const Card = ({texto}: ICard) => {
  return (
    <S.Aside>
      <p>{texto}</p>
    </S.Aside>
  );
};
