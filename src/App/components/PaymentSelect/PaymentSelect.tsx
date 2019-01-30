import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import CardSlider from '../CardsSlider/CardSlider'

import { ICard } from '../../utils/globalTypes'
import { ROUTING } from '../../utils/constants'
import styles from './PaymentSelect.module.scss'

interface IProps {
  cards: ICard[]
  selectedCard: ICard
  selectCard: (card: ICard) => void
}

interface IState {
  currentIndex: number
}

export default class PaymentSelect extends React.Component<
  RouteComponentProps & IProps,
  IState
> {
  readonly state: IState = {
    currentIndex: 0
  }

  onNext = () => {
    const { currentIndex } = this.state
    const { cards } = this.props
    const total = cards.length - 1

    if (currentIndex !== total) {
      this.setState(
        (state: IState) => ({ currentIndex: state.currentIndex + 1 }),
        () => {
          this.props.selectCard(cards[this.state.currentIndex])
        }
      )
    }
  }

  onPrev = () => {
    const { currentIndex } = this.state
    const { cards } = this.props

    if (currentIndex) {
      this.setState(
        (state: IState) => ({ currentIndex: state.currentIndex - 1 }),
        () => {
          this.props.selectCard(cards[this.state.currentIndex])
        }
      )
    }
  }

  onAdd = () => {
    this.props.history.push(`${ROUTING.PAYMENT}${ROUTING.PAYMENT_ADD}`)
  }

  selectCard = () => {
    this.props.history.push(ROUTING.SUMMARY)
  }

  render() {
    const { selectedCard } = this.props

    return (
      <>
        <div className={styles.buttons}>
          <button onClick={this.onAdd}>Dodaj nową katę</button>
          <button onClick={this.selectCard}>Zapłać</button>
        </div>
        <CardSlider
          onNext={this.onNext}
          onPrev={this.onPrev}
          selectedCard={selectedCard}
        />
      </>
    )
  }
}
