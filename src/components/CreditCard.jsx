//import React from 'react'
import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/master-card.svg';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const styles = {
    backgroundColor: { bgColor },
    color: { color },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'between',
    //padding: '60px 30px',
    width: '300px',
    height: '150px',
    border: 'solid',
    margin: '3px',
  };
  const cardLogo = {
    Visa: visa,
    'Master Card': mastercard,
    default: '',
  }[type];

  return (
    <div style={styles}>
      
      <img src={cardLogo} alt="" width="30px" style={{alignSelf: 'flex-end'}} />
      
      <div style={{ justifySelf: 'center' }}>{number}</div>
      <div style={{ justifySelf: 'end', alignSelf: 'flex-start' }}>
        Expires {expirationMonth}/{expirationYear} {bank}
      </div>
      <div style={{ justifySelf: 'end', alignSelf: 'flex-start' }}>{owner}</div>
    </div>
  );
}

export default CreditCard;
