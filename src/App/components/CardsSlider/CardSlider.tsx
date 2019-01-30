import React from 'react'

import CardItem from '../CardItem/CardItem'

import { ICard } from '../../utils/globalTypes'
import styles from './CardSlider.module.scss'

interface IProps {
  selectedCard: ICard
  onPrev: () => void
  onNext: () => void
}

const CardSlider: React.FunctionComponent<IProps> = ({
  onNext,
  onPrev,
  selectedCard
}) => (
  <div className={styles.slider}>
    <button onClick={onPrev} className={styles.arrowBack} />
    <div className={styles.sliderItems}>
      <CardItem key={selectedCard.cardNumber} card={selectedCard} />
    </div>
    <button onClick={onNext} className={styles.arrowNext} />
  </div>
)

export default CardSlider
