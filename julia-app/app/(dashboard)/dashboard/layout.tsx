import "../_style/index.scss"
import Footer from "../_ui/Components/Footer"
import NavBar from "../_ui/Components/NavBar/NavBar"

export const metadata = {
  title: 'Админ Панель',
  description: 'Админка',

  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  }
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <NavBar />
        <main className="elementWidth">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
