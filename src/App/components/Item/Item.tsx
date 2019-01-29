import React from 'react'
import { IBasketItem } from '../../utils/globalTypes'
import styles from './Item.module.scss'

interface IProps {
  data: IBasketItem
}

const Item: React.FunctionComponent<IProps> = ({ data }) => (
  <article className={styles.item}>
    <img src={data.img} alt={data.name} />
    <p>{data.name}</p>
    <p>{data.price} zł</p>
    <p>{data.stock} szt.</p>
  </article>
)

export default Item
