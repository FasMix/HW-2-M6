import { Banner } from "../widgets/Banner/Banner"
import { Footer } from "../widgets/Footer/Footer"
import { Header } from "../widgets/Header"
import "./styles/global.scss"

const App = () => {
  return (
    <div>
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default App