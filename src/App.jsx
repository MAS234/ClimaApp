import AppClima from './componets/AppClima'
import { ClimaProvider } from './context/ClimaProvider'
import Sol from "./assets/sol.png"
import Luna from "./assets/luna.png"


function App() {

  return (
    <div >

      <ClimaProvider>

        <header>
          <img className='w-28 h-28 mr-5 hover:scale-110 duration-100 fondoDibujos' src={Sol} alt="Sol" />
          <h1 className='text-gray-600'>Buscador De Clima</h1>
          <img className='w-28 h-28 ml-5 hover:scale-110 duration-100 fondoDibujos' src={Luna} alt="Luna" />

        </header>

      <AppClima/>

      </ClimaProvider>

      
    </div>
  )
}

export default App
