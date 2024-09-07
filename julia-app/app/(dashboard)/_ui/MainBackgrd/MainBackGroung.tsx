import "@/app/(dashboard)/_style/_components/_mainBackgroung.scss"

const MainBackGroung = ({ children }: { children: React.ReactNode}) => {
  return (
    <section className="mainBackGroung">{children}</section>
  )
}

export default MainBackGroung