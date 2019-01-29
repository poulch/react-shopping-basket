import React from 'react'
import { connect } from 'react-redux'

import BasketItem from '../../components/BasketItem/BasketItem'

import { IStore } from '../../redux/types'
import { selectItems, selectItemTotal } from '../../redux/services/basket'
import { IBasketItem } from '../../utils/globalTypes'
import styles from './Basket.module.scss'

interface IProps {
  items: IBasketItem[]
  total: number
}

class Basket extends React.Component<IProps> {
  render() {
    const { items, total } = this.props

    return (
      <div>
        {items.map((item: IBasketItem) => (
          <BasketItem key={item.id} data={item} />
        ))}

        <div className={styles.summary}>
          <p>Do zapłaty: {total}</p>
          <button>Przejdź do płatności</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  items: selectItems(state),
  total: selectItemTotal(state)
})

export default connect(mapStateToProps)(Basket)
