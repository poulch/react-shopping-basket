import React from 'react'
import { ICard } from '../../utils/globalTypes'
import styles from './CardItem.module.scss'

interface IProps {
  card: ICard
}

const CardItem: React.FunctionComponent<IProps> = ({ card }) => {
  return (
    <div className={styles.item}>
      <p>Numer karty: {card.cardNumber}</p>
      <p>Kod CVC: {card.cvc}</p>
      <p>Data waności {card.expiredDate}</p>
      <p>Imię i nazwisko właściciela{card.holderName}</p>
    </div>
  )
}

export default CardItem
