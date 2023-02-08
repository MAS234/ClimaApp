import Formulario from './Formulario'
import Resultado from './Resultado'
import Loading from './Loading'
import useClima from '../hooks/UseClima'

function AppClima() {

  const { resultado, cargando, noHayResultados } = useClima()

  return (
    <>
    <main className='dos-columnas'>

        <Formulario/>

        {
        cargando ? <Loading/> :
        resultado?.name ? <Resultado/> :
        noHayResultados ? <p>{noHayResultados}</p> :
        <p className='text-center text-gray-600'>El clima se va a mostrar aqui</p>
        }
        

    </main>
    </>
  )
}

export default AppClima
