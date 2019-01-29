export enum BASKET_ACTIONS {
  SET_CARD = 'SET_CARD'
}

interface ISetCard {
  type: BASKET_ACTIONS.SET_CARD
  cardId: number
}

export type IBasketActions = ISetCard
