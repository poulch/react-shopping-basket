export enum ROUTING {
  MAIN = '/',
  BASKET = '/basket',
  PAYMENT = '/payment',
  PAYMENT_ADD = '/add',
  SUMMARY = '/summary'
}

export const VisaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
export const MasterCardRegex = /^5[1-5][0-9]{14}$/
