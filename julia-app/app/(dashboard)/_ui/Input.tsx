import "../_style/_ui/input.scss"
import { IFormInput } from "../_ts/form-fields.intarface"

const FormInput = (
  { type, placeholder }: IFormInput
) => {
  return (
    <input className="formInput" type={type} placeholder={placeholder} />
  )
}

export default FormInput