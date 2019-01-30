import React from 'react'
import { RouteComponentProps } from 'react-router-dom'

import CardSlider from '../CardsSlider/CardSlider'

import { ICard } from '../../utils/globalTypes'
import { ROUTING } from '../../utils/constants'
import styles from './PaymentSelect.module.scss'

interface IProps {
  cards: ICard[]
  selectCard: (card: ICard) => void
}

interface IState {
  selectedCard: ICard
  currentIndex: number
}

export default class PaymentSelect extends React.Component<
  RouteComponentProps<{}> & IProps,
  IState
> {
  readonly state: IState = {
    currentIndex: 0,
    selectedCard: this.props.cards[0]
  }

  onNext = () => {
    const { currentIndex } = this.state
    const { cards } = this.props
    const total = cards.length - 1

    if (currentIndex !== total) {
      this.setState(
        (state: IState) => ({ currentIndex: state.currentIndex + 1 }),
        () => {
          this.setState({ selectedCard: cards[this.state.currentIndex] })
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
          this.setState({ selectedCard: cards[this.state.currentIndex] })
        }
      )
    }
  }

  selectCard = () => {
    const { selectedCard } = this.state
    this.props.selectCard(selectedCard)
    this.props.history.push(ROUTING.SUMMARY)
  }

  render() {
    const { cards } = this.props
    const { currentIndex } = this.state

    return (
      <>
        <div className={styles.buttons}>
          <button>Add new card</button>
          <button onClick={this.selectCard}>Select card</button>
        </div>
        <CardSlider
          onNext={this.onNext}
          onPrev={this.onPrev}
          selectedCard={cards[currentIndex]}
        />
      </>
    )
  }
}
