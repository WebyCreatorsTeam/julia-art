import "../_style/_ui/input.scss"

interface IFormInput {
  type: string
  placeholder: string
}

const FormInput = (
  { type, placeholder }: IFormInput
) => {
  return (
    <input className="formInput" type={type} placeholder={placeholder}/>
  )
}

export default FormInput