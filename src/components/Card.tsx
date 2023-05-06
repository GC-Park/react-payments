import styled from 'styled-components';
import { IcChip } from '../assets';
import { useModalContext } from 'modal-patrick';
import { CardType } from '../types';

const Card = (props: CardType) => {
  const cardNumberArray = props.cardNumber.replaceAll(' - ', ' ').split(' ');

  const { openModal } = useModalContext();

  return (
    <CardWrapper style={{ background: props.color }} onClick={() => openModal()}>
      <span>{props.bankName}</span>
      <img src={IcChip} alt="ic-chip" />
      <CardInfoWrapper>
        <div>
          {cardNumberArray.map((cardNumber, idx) => (
            <span key={idx}>{cardNumber}</span>
          ))}
        </div>
        <div>
          <span>{props.ownerName}</span>
          <span>{props.expiredDate}</span>
        </div>
      </CardInfoWrapper>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  width: 213px;
  height: 133px;

  box-sizing: border-box;

  padding: 10px 14px 0 14px;
  border-radius: 5px;

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);

  > span {
    font-size: 12px;
    margin-bottom: 28px;
    color: white;
  }
`;

const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 55px;

  font-size: 15px;
  font-weight: 600;
  color: white;

  padding: 8px 5px;
  box-sizing: border-box;

  & > div {
    display: flex;
    justify-content: space-between;

    & > span {
      font-weight: 900;
    }
  }
`;

export default Card;
