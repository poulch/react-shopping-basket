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
  card: ICard[]
  setActiveCard: (id: string) => void
}

class Payment extends React.Component<RouteComponentProps<{}> & IProps> {
  render() {
    return (
      <div>
        <Switch>
          <Route
            path={this.props.match.url}
            render={props => <PaymentSelect />}
          />
          <Route
            path={`${this.props.match.url}/${ROUTING.PAYMENT_ADD}`}
            render={props => <PaymentAdd />}
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
