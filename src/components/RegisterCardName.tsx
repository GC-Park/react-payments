import { useNavigate } from 'react-router-dom';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import styled from 'styled-components';
import CardNameInput from './CardNameInput';
import { CardType } from '../types';
import { LOCALSTORAGE_KEY } from '../constants';
import { useSetValue } from '../usehooks/useSetValue';

interface Props {
  card: CardType;
  setLoading: (value: boolean) => void;
  setCard: (value:string)=>void
}

const RegisterCardName = (props: Props) => {
  const navigator = useNavigate();

  const [value, changeValue] = useSetValue(props.card, props.setCard)

  const handleRegisterCardNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeValue("cardName", e.target.value);
  };

  const registerCardNameHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const cards = getLocalStorage(LOCALSTORAGE_KEY.CARD);
    cards.pop();
    
    setLocalStorage(LOCALSTORAGE_KEY.CARD, [...cards, value]);
    props.setLoading(true);

    setTimeout(() => navigator('/'), 3000);
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
