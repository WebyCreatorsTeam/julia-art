"use client"

import "../../_style/_ui/input.scss"
import { IFormInput } from "../../_ts/form-fields.intarface"
import { validateValues } from "./fornValidation"
import { useState } from "react"

const FormInput = ({ errorMessage, state, type, placeholder, name, autoComp }: IFormInput) => {
  const [inputError, setInputError] = useState<string>("")

  const validInput = (ev: React.SyntheticEvent<EventTarget>) => {
    ev.preventDefault()
    const target = ev.target as HTMLInputElement
    const { continueWork, message } = validateValues(target.name, target.value)
    if (!continueWork) return setInputError(message)
    if (continueWork) {
      return setInputError("")
    }
  }

  return (
    <>
      <input
        className="formInput"
        type={type}
        placeholder={placeholder}
        name={name}
        autoComplete={autoComp}
        aria-describedby="customer-error"
        onBlur={validInput}
      />
      {(inputError || state?.errors[name]) && (
        <div className="validError" id="customer-error" aria-live="polite" aria-atomic="true">
          {inputError && <p>{inputError}</p>}
          {state?.errors[name] && state.errors[name].map((error: string) => (
            <p key={error}>{error}</p>
          ))}
          {errorMessage && <p>{errorMessage}</p>}
        </div>
      )}
    </>
  )
}

export default FormInput