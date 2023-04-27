import { useNavigate } from 'react-router-dom';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import styled from 'styled-components';
import CardNameInput from './CardNameInput';
import { CardType } from '../types';

interface Props {
  card: CardType;
}

const RegisterCardName = (props: Props) => {
  const navigator = useNavigate();

  const handleRegisterCardNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.card.cardName = e.target.value;
    console.log(props.card.cardName, e.target.value);
  };

  const registerCardNameHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cards = getLocalStorage('card');
    const card = cards.pop();
    card.cardName = props.card.cardName;
    console.log(card);
    setLocalStorage('card', [...cards, card]);

    navigator('/');
  };

  return (
    <RegisterCardNameWrapper>
      <CardNameInput
        placeholder="카드 이름을 입력해 주세요."
        value={props.card.cardName}
        isAutoFocus={true}
        isRequired={true}
        onChange={handleRegisterCardNameChanged}
      />
      <button type="button" onClick={registerCardNameHandler}>
        다음
      </button>
    </RegisterCardNameWrapper>
  );
};

const RegisterCardNameWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > button {
    text-align: end;
    background: transparent;
    border: none;

    font-weight: 700;
    font-size: 14px;

    margin-top: 10rem;
    cursor: pointer;
    :active {
      opacity: 50%;
      transform: scale(0.98);
    }
  }
`;

export default RegisterCardName;