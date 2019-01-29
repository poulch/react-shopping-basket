import React from 'react'
import { connect } from 'react-redux'
import {
  Switch,
  Route,
  withRouter,
  RouteComponentProps
} from 'react-router-dom'

import Basket from '../Basket/Basket'
import Header from '../../components/Header/Header'

import { IStore } from '../../redux/types'
import { selectItemsLenght } from '../../redux/services/basket'
import { ROUTING } from '../../utils/constants'
import styles from './Main.module.scss'
import '../../utils/global.scss'

interface IProps {
  itemsLength: number
}

class Main extends React.Component<RouteComponentProps<{}> & IProps> {
  handleNavigate = (path: string) => {
    this.props.history.push(`/${path}`)
  }

  render() {
    const { itemsLength } = this.props

    return (
      <section className={styles.container}>
        <Header count={itemsLength} navigate={this.handleNavigate} />

        <div className={styles.content}>
          <Switch>
            <Route path={ROUTING.BASKET} component={Basket} />
          </Switch>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state: IStore) => ({
  itemsLength: selectItemsLenght(state)
})

export default connect(mapStateToProps)(withRouter(Main))
