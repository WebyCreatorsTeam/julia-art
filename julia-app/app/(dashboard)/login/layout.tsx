import { magra } from "../_font/font"
import Footer from "../_ui/Components/Footer"

export const metadata = {
  title: 'Админ Панель',
  description: 'Админка',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={magra.className}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
