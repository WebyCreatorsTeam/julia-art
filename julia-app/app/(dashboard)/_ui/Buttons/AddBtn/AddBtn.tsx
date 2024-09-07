import "@/app/(dashboard)/_style/_ui/AddBtn/add-btn.scss"
import Image from "next/image"
import Link from "next/link"
import React from 'react'

interface IAddBtn {
  link: boolean
  href?: string
  linkText?: string
  btnText?: string
  btnType?: "button" | "submit" | "reset"
  action?: any

}
const AddBtn = ({ link, href, linkText, btnText, btnType, action }: IAddBtn) => {
  return (
    link ?
      <Link href={href!} className="addBtn link">
        <div className="lightback">
          <Image src="/dashboard/addBtn/plus-dark.svg" width={12} height={12} alt="plus icon" />
        </div>
        {linkText}
      </Link> :
      <button type={btnType} onClick={action} className="addBtn button">
        <div className="darkback">
          <Image src="/dashboard/addBtn/plus.svg" width={12} height={12} alt="plus icon" />
        </div>
        {btnText}
      </button>
  )
}

export default AddBtn