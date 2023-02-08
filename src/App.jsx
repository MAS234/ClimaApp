import AppClima from './componets/AppClima'
import { ClimaProvider } from './context/ClimaProvider'


function App() {

  return (
    <div >

      <ClimaProvider>

        <header>
          <img className='w-20 h-20 mr-5 hover:scale-110 duration-100 fondoDibujos' src="/src/assets/sol.png" alt="Sol" />
          <h1>Buscador De Clima</h1>
          <img className='w-20 h-20 ml-5 hover:scale-110 duration-100 fondoDibujos' src="/src/assets/luna.png" alt="Luna" />

        </header>

      <AppClima/>

      </ClimaProvider>

      
    </div>
  )
}

export default App
