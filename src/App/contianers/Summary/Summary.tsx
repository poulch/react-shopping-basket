import React from 'react'
import { connect } from 'react-redux'

import BasketItem from '../../components/BasketItem/BasketItem'
import CardItem from '../../components/CardItem/CardItem'

import { IStore } from '../../redux/types'
import { ICard, IBasketItem } from '../../utils/globalTypes'
import {
  selectSelectedCard,
  selectItems,
  selectItemTotal
} from '../../redux/services/basket'
import styles from './Summary.module.scss'

interface IProps {
  card: ICard
  items: IBasketItem[]
  total: number
}

class Summary extends React.Component<IProps> {
  render() {
    const { card, items, total } = this.props

    return (
      <div className={styles.summary}>
        <h1>Twoje zamówienie</h1>
        {items.map((item: IBasketItem) => (
          <BasketItem key={item.id} data={item} />
        ))}

        <div className={styles.summary}>
          <p>Całkowity koszt: {total}</p>
        </div>

        <h2>Dane kary</h2>
        <CardItem card={card} />
      </div>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  card: selectSelectedCard(state),
  items: selectItems(state),
  total: selectItemTotal(state)
})

export default connect(mapStateToProps)(Summary)
