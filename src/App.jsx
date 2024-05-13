import { ItemListContainer } from "./components/ItemListContainer"
import { Header } from "./components/header/Header"
import { Footer } from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./css/main.css"


function App() {
  return (
    <>
      <Header />
      <ItemListContainer />
      <Footer />
    </>
  )
}

export default App