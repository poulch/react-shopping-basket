import { IStore } from '../types'
import { IBasketActions, BASKET_ACTIONS } from './basketTypes'
import { ICard, IBasketItem } from '../../utils/globalTypes'
import cards from '../../utils/data/_cards.json'
import items from '../../utils/data/_items.json'

const initialState = {
  items: items || [],
  cards: cards || [],
  selectedCard: cards[0]
}

export const basketReducer = (state = initialState, action: IBasketActions) => {
  switch (action.type) {
    case BASKET_ACTIONS.SET_CARD:
      return { ...state, selectedCard: action.card }
    case BASKET_ACTIONS.ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.card],
        selectedCard: action.card
      }
    default:
      return state
  }
}

export const setActiveCard = (card: ICard) => ({
  type: BASKET_ACTIONS.SET_CARD,
  card
})

export const addNewCard = (card: ICard) => ({
  type: BASKET_ACTIONS.ADD_CARD,
  card
})

export const selectItems = (state: IStore) => state.basket.items
export const selectItemsLenght = (state: IStore) => state.basket.items.length
export const selectCards = (state: IStore) => state.basket.cards
export const selectSelectedCard = (state: IStore) => state.basket.selectedCard
export const selectItemTotal = (state: IStore) =>
  state.basket.items.reduce(
    (total: number, item: IBasketItem) => total + item.price * item.stock,
    0
  )
