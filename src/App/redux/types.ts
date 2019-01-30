import { IBasketItem, ICard } from '../utils/globalTypes'

export interface IStore {
  basket: {
    items: IBasketItem[]
    cards: ICard[]
    selectedCard: ICard
  }
}
