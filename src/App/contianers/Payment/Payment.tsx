import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, Switch, Route } from 'react-router-dom'

import PaymentSelect from '../../components/PaymentSelect/PaymentSelect'
import PaymentAdd from '../../components/PaymentAdd/PaymentAdd'

import { IStore } from '../../redux/types'
import { ICard } from '../../utils/globalTypes'
import { ROUTING } from '../../utils/constants'
import {
  selectCards,
  setActiveCard,
  selectSelectedCard,
  addNewCard
} from '../../redux/services/basket'

interface IProps {
  cards: ICard[]
  selectedCard: ICard
  addNewCard: (card: ICard) => void
  setActiveCard: (card: ICard) => void
}

class Payment extends React.Component<RouteComponentProps<{}> & IProps> {
  render() {
    const { cards, setActiveCard, addNewCard, selectedCard } = this.props

    return (
      <div>
        <Switch>
          <Route
            exact
            path={this.props.match.url}
            render={(props: RouteComponentProps) => (
              <PaymentSelect
                selectCard={setActiveCard}
                selectedCard={selectedCard}
                cards={cards}
                {...props}
              />
            )}
          />
          <Route
            exact
            path={`${this.props.match.url}${ROUTING.PAYMENT_ADD}`}
            render={(props: RouteComponentProps) => (
              <PaymentAdd addCard={addNewCard} {...props} />
            )}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  cards: selectCards(state),
  selectedCard: selectSelectedCard(state)
})

export default connect(
  mapStateToProps,
  { setActiveCard, addNewCard }
)(Payment)
