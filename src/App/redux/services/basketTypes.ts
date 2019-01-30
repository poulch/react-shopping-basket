import { ICard } from '../../utils/globalTypes'

export enum BASKET_ACTIONS {
  SET_CARD = 'SET_CARD',
  ADD_CARD = 'ADD_CARD'
}

interface ISetCard {
  type: BASKET_ACTIONS.SET_CARD
  card: ICard
}

interface IAddCard {
  type: BASKET_ACTIONS.ADD_CARD
  card: ICard
}

export type IBasketActions = ISetCard | IAddCard
