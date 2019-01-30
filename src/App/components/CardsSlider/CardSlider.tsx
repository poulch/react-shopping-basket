import React from 'react'

import CardItem from '../CardItem/CardItem'

import { ICard } from '../../utils/globalTypes'
import styles from './CardSlider.module.scss'

interface IProps {
  selectedCard: ICard
  onPrev: () => void
  onNext: () => void
}

class CardSlider extends React.Component<IProps> {
  render() {
    const { onNext, onPrev, selectedCard } = this.props

    return (
      <div className={styles.slider}>
        <button onClick={onPrev} className={styles.arrowBack} />
        <div className={styles.sliderItems}>
          <CardItem key={selectedCard.cardNumber} card={selectedCard} />
        </div>
        <button onClick={onNext} className={styles.arrowNext} />
      </div>
    )
  }
}

export default CardSlider
