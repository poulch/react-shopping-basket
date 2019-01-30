import React from 'react'
import * as Yup from 'yup'
import { RouteComponentProps } from 'react-router-dom'
import { Formik, Field, ErrorMessage, Form } from 'formik'

import Input from '../Input/Input'

import { ICard } from '../../utils/globalTypes'
import {
  CardNumberRegex,
  ExipredDateRegex,
  ROUTING
} from '../../utils/constants'
import styles from './PaymentAdd.module.scss'

interface IFormValues {
  cvc: number
  cardNumber: string
  holderName: string
  expiredDate: string
}

interface IProps {
  addCard: (card: ICard) => void
}

export default class PaymentAdd extends React.Component<
  RouteComponentProps<{}> & IProps
> {
  render() {
    return (
      <Formik
        initialValues={{
          cvc: 0,
          cardNumber: '',
          holderName: '',
          expiredDate: ''
        }}
        validationSchema={Yup.object().shape({
          cvc: Yup.number()
            .test(
              'len',
              'Kod CVC moze składać sie z 3 lub 4 cyfr',
              val => val.toString().length > 2 && val.toString().length < 5
            )
            .required('Kod CVC jest wymagany'),
          cardNumber: Yup.string()
            .matches(CardNumberRegex, 'Numer nie zgodny ze wzorem')
            .required('Numer kary jest wymagany'),
          holderName: Yup.string()
            .min(3)
            .required('Dane właściciela są wymagane'),
          expiredDate: Yup.string()
            .matches(ExipredDateRegex, 'Podaj date w formacie MM/YY')
            .required('Data wazności jest wymagana')
        })}
        onSubmit={(values: IFormValues) => {
          this.props.addCard(values)
          this.props.history.push(ROUTING.PAYMENT)
        }}
        render={() => (
          <Form>
            <h1>Dodaj kartę:</h1>

            <div className={styles.inputContainer}>
              <Field
                type="number"
                name="cvc"
                label="Kod CVC"
                component={Input}
              />

              <ErrorMessage
                className={styles.error}
                name="cvc"
                component="div"
              />
            </div>

            <div className={styles.inputContainer}>
              <Field
                type="text"
                name="cardNumber"
                label="Number karty"
                component={Input}
              />

              <ErrorMessage
                className={styles.error}
                name="cardNumber"
                component="div"
              />
            </div>

            <div className={styles.inputContainer}>
              <Field
                type="text"
                name="holderName"
                label="Dane właściciela"
                component={Input}
              />

              <ErrorMessage
                className={styles.error}
                name="holderName"
                component="div"
              />
            </div>

            <div className={styles.inputContainer}>
              <Field
                type="text"
                name="expiredDate"
                label="Data Waźności"
                component={Input}
              />

              <ErrorMessage
                className={styles.error}
                name="expiredDate"
                component="div"
              />
            </div>

            <button className={styles.submit} type="submit">
              Dodaj
            </button>
          </Form>
        )}
      />
    )
  }
}
