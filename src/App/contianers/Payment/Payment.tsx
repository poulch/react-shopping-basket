import React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps, Switch, Route } from 'react-router-dom'

import PaymentSelect from '../../components/PaymentSelect/PaymentSelect'
import PaymentAdd from '../../components/PaymentAdd/PaymentAdd'

import { IStore } from '../../redux/types'
import { ICard } from '../../utils/globalTypes'
import { ROUTING } from '../../utils/constants'
import { selectCards, setActiveCard } from '../../redux/services/basket'

interface IProps {
  cards: ICard[]
  setActiveCard: (card: ICard) => void
}

class Payment extends React.Component<RouteComponentProps<{}> & IProps> {
  render() {
    const { cards, setActiveCard } = this.props

    return (
      <div>
        <Switch>
          <Route
            path={this.props.match.url}
            render={(props: RouteComponentProps) => (
              <PaymentSelect
                selectCard={setActiveCard}
                cards={cards}
                {...props}
              />
            )}
          />
          <Route
            path={`${this.props.match.url}/${ROUTING.PAYMENT_ADD}`}
            render={(props: RouteComponentProps) => <PaymentAdd {...props} />}
          />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  cards: selectCards(state)
})

export default connect(
  mapStateToProps,
  { setActiveCard }
)(Payment)
