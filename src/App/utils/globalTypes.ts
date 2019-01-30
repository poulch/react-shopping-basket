export interface IBasketItem {
  id: number
  name: string
  img: string
  price: number
  stock: number
}

export enum CardType {
  Visa = 'Visa',
  MasterCard = 'MasterCard'
}

export interface ICard {
  cvc: number
  holderName: string
  expiredDate: string
  cardNumber: number
  type: CardType
}
