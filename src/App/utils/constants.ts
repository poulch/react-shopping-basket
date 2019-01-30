export enum ROUTING {
  MAIN = '/',
  BASKET = '/basket',
  PAYMENT = '/payment',
  PAYMENT_ADD = '/add',
  SUMMARY = '/summary'
}

export const CardNumberRegex = /^[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}$/
export const ExipredDateRegex = /^(0[1-9]|1[0-2])\/?(([0-9]{4}|[0-9]{2})$)/
