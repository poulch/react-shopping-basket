import { IStore } from '../types'
import { IBasketActions, BASKET_ACTIONS } from './basketTypes'
import { ICard, IBasketItem } from '../../utils/globalTypes'
import cards from '../../utils/_cards.json'
import items from '../../utils/_items.json'

const initialState = {
  items: items || [],
  cards: cards || [],
  selectedCardId: ''
}

export const backetReducer = (state = initialState, action: IBasketActions) => {
  switch (action.type) {
    case BASKET_ACTIONS.SET_CARD:
      return { ...state, card: action.card }
    default:
      return state
  }
}

export const setActiveCard = (card: ICard) => ({
  type: BASKET_ACTIONS.SET_CARD,
  card
})

export const selectItems = (state: IStore) => state.basket.items
export const selectItemsLenght = (state: IStore) => state.basket.items.length
export const selectCards = (state: IStore) => state.basket.cards
export const selectSelectedCardId = (state: IStore) =>
  state.basket.selectedCardId
export const selectItemTotal = (state: IStore) =>
  state.basket.items.reduce(
    (total: number, item: IBasketItem) => total + item.price,
    0
  )
