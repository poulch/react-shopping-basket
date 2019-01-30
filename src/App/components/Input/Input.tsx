import React from 'react'
import { FieldProps } from 'formik'
import styles from './Input.module.scss'

interface IProps {
  type?: 'number' | 'text'
  label?: string
  className?: string
  placeholder?: string
}

const Input: React.FunctionComponent<FieldProps & IProps> = ({
  field,
  label,
  className,
  type = 'text',
  placeholder
}) => {
  return (
    <div className={styles.container}>
      {label ? (
        <label className={styles.label} htmlFor={field.name}>
          {label}
        </label>
      ) : null}
      <input
        id={field.name}
        name={field.name}
        className={styles.input}
        placeholder={placeholder}
        type={type}
        min={type === 'number' ? '0' : ''}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
      />
    </div>
  )
}

export default Input
