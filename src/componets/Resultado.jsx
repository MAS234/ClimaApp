import useClima from "../hooks/UseClima"

const Resultado = () => {

  const { resultado } = useClima()
  const {name, main} = resultado

  console.log(resultado)

  const kelvin = 273.15;

  return (
    <div className='contenedor'>
      <h2 className="text-center text-3xl">El clima de {name} es de</h2>

      <div className="flex justify-center">
      <p className="mt-2 text-3xl text-center">
         {parseInt(main.temp - kelvin)} <span className="font-bold text-sm align-super">&#x2103;</span>
         <img className="w-40" src="/src/assets/clima.png" alt="sol" />
      </p>
      </div>

      
      <div className="flex justify-between">
      <p className="mt-2 text-lg ">
         Minima: {parseInt(main.temp_min - kelvin)} <span className="font-bold text-sm align-super">&#x2103;</span>
      </p>

      <p className="mt-2 text-lg ">
         Maxima: {parseInt(main.temp_max - kelvin)} <span className="font-bold text-sm align-super">&#x2103;</span>
      </p>
      </div>


      <p className="mt-2 text-lg text-center">
        Humedad: {main.humidity} <span>%</span>
      </p>
    </div>
  )
}

export default Resultado
