import React from 'react'
import { ReactComponent as BasketSvg } from '../../utils/media/basket.svg'
import styles from './Header.module.scss'

interface IProps {
  count: number
  navigate: (path: string) => void
}

const Header: React.FunctionComponent<IProps> = ({ navigate, count }) => (
  <header className={styles.header}>
    <h1 className={styles.headerHeading}>Shopping App</h1>
    <button onClick={() => navigate('basket')} className={styles.headerBasket}>
      <BasketSvg />
      {count ? <div className={styles.headerBasketCount}>{count}</div> : null}
    </button>
  </header>
)

export default Header
